<LeftDrawer>
  <div slot="drawer-items">
    {#each areaDocs as areaDoc}
      <Item>
        <Text>{areaDoc.name}</Text>

        <List>
          <Item>

          </Item>
        </List>
      </Item>
    {/each}
  </div>

  <!-- Display blackboards -->
  <Blackboard slot="main-content"/>
</LeftDrawer>

<!-- <CurrentRoom/> -->
<!-- In PARALLEL, fetch classDoc, areaDoc and roomDoc -->
<!-- Or it should redirect by appending to the route -->

<Button on:click={signInWithGoogle}>Sign in with Google</Button>

<script context="module">
	export function load({ page }) {
		// let host = page.host;
		// const i = host.indexOf(':');
		// if (i >= 0) {
		// 	host = host.substring(0, i);
		// }
    console.log('load() index.svelte')
		return {
			redirect: '/room/lvzQqyZIV1wjwYnRV9hn',
      status: 301
			// status: host === 'localhost' || host === '127.0.0.1' ? 302 : 301
		};
	}
</script>

<script>
  import CurrentRoom from './room/[id].svelte'
  import Button, { Label } from '@smui/button';
  import List, { Item, Text } from '@smui/list';
  import LeftDrawer from '../LeftDrawer.svelte'
  import Blackboard from '../components/Blackboard.svelte'
  import db from '../database.js'
  import { collection, getDocs, query, where  } from "firebase/firestore"; 
  import { onMount } from 'svelte';
  import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
  // import { goto } from '$app/navigation';

  // function routeToPage(route, replaceState) {
  //   goto(`/lvzQqyZIV1wjwYnRV9hn`, { replaceState }) 
  // }
  // routeToPage()

  // export let dota = load() // shouldn't it be import? 
  // export let dota

  // console.log('dota =', dota)

  // onMount(async () => {
  //   console.log('dota =', dota)
  // })

  let areaDocs = [] 
  let roomDocs; 
  let classDoc;

  function signInWithGoogle () {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        // fetch database
        try {
          const classesSnapshot = await getDocs(collection(db, 'classes'))
          const allClasses = classesSnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() } 
          });
          console.log('allClasses =', allClasses)
          
          // now fetch area and rooms
          const c = allClasses[0] 
          c.id = 'lvzQqyZIV1wjwYnRV9hn' // override on purpose for testing

          // fetch areas
          const areasQuery = query(collection(db, `classes/${c.id}/roomTypes`))
          const areasSnapshot = await getDocs(areasQuery) 
          const allAreas = areasSnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
          })
          console.log('allAreas =', allAreas)
          areaDocs = allAreas

          // fetch rooms 
          const roomsQuery = query(collection(db, `classes/${c.id}/rooms`), where('roomTypeID', '==', c.id))
          const roomsSnapshot = await getDocs(roomsQuery)
          const allRooms = roomsSnapshot.docs.map(doc => { 
            return { id: doc.id, ...doc.data() } 
          })
        
          console.log('allRooms =', allRooms)
        } catch (e) {
          console.error("Error adding document: ", e);
        }

        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    console.log('signing in...')
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('success')
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        console.log('error =', error)
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
</script>

<style>
  body { 
    margin: 0; 
    padding: 0;
  }
</style>