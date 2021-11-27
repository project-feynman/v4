
<script context="module">
  import db from '../../database.js'

	export async function load({ page }) {
		console.log('page =', page)
		return {
			props: {
				roomID: page.params.id,
			}
		}
	}
</script>

{#if roomDocs.length > 0}
  <div use:portal={'side-drawer-list'}>
		{#each roomDocs as roomDoc}
		  {#if roomDoc.name }
				<Item 
					on:click={() => routeToPage(`room/${roomDoc.id}`)}
					selected={roomDoc.id === roomID}
				>
					{roomDoc.name}
				</Item>
			{/if}
		{/each}
  </div>
{/if}

<!-- Lazy loading -->
{#if roomDoc}
	<div use:portal={'main-content'} style="height: 100vh">
		{#each roomDoc.blackboards as boardID (boardID) }
			<RenderlessFetchStrokes dbPath={boardsDbPath + boardID + '/strokes'} 
				let:fetchStrokes={fetchStrokes}
				let:strokesArray={strokesArray}
			>
				{#if !strokesArray}
					<LinearProgress indeterminate />	
					<div use:lazyFetching={fetchStrokes} style="height: 500px">
						<Blackboard strokesArray={[]}></Blackboard>
					</div> 
				{:else if strokesArray }
					<Blackboard strokesArray={strokesArray}/>
				{/if}
			</RenderlessFetchStrokes>
		{/each}
	</div>
{/if}

<LeftDrawer/>

<script>
import LinearProgress from '@smui/linear-progress';
import RenderlessFetchStrokes from '../../components/RenderlessFetchStrokes.svelte'
import Blackboard from '../../components/Blackboard.svelte'
import LeftDrawer from '../../LeftDrawer.svelte'
import { portal } from "../../actions.js";
import { onMount } from 'svelte'
import { storeUser } from '../../store.js'
import { fetchDocs } from '../../database.js'
import { collection, getDocs, getDoc, query, where, doc  } from 'firebase/firestore' 
import List, { Item, Text } from '@smui/list';
import { goto } from '$app/navigation';
// import { getStores, navigating, page, session } from '$app/stores';

export let roomID

let roomDoc
let roomDocs = []
const boardsDbPath = 'classes/lvzQqyZIV1wjwYnRV9hn/blackboards/'
const roomsDbPath = 'classes/lvzQqyZIV1wjwYnRV9hn/rooms/'

function routeToPage(route, replaceState = false) {
   goto(`/${route}`, { replaceState }) 
}

function lazyFetching (node, fetchStrokes) {
	let observer = new IntersectionObserver (
		(entries) => {
			for (const entry of entries) {
				// for some god damn reason the callbacks fire on initialization, even when there is no intersection,
				// so we have to check manually
				if (entry.isIntersecting) {
					fetchStrokes()
					return
				}
			}
		}, 
		{
			root: null, // use viewport 
			threshold: 0.5,
			rootMargin: '0px' // shrink/expand the root element's area, not very useful
		}
	)
  observer.observe(node)
}

storeUser.subscribe(async (newUserValue) => {
	console.log('new user value was set =', newUserValue)
	if (newUserValue) {
		roomDocs = await fetchDocs(roomsDbPath)
		const roomSnapshot = await getDoc(doc(db, roomsDbPath + roomID))
		roomDoc = { id: roomSnapshot.id, ...roomSnapshot.data() }
		console.log('roomDoc =', roomDoc)
	}
})

$: roomID, updateRoomDoc() 

async function updateRoomDoc () {
	const roomSnapshot = await getDoc(doc(db, roomsDbPath + roomID))
	roomDoc = { id: roomSnapshot.id, ...roomSnapshot.data() }
}
</script>