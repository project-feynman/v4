<script context="module">
	export async function load({ }) {
		// the `slug` parameter is available because this file
		// is called [slug].json.js
		// const { id } = params;
		// console.log('id =', id)
		// console.log('db =', db)

		return {}

		// console.log('__layout page =', page)
		// return {
		// 	props: {
		// 		roomID: page.params.id,
		// 	}
		// }
		console.log('roomDoc =', roomDoc)
	}
</script>

{#if !storeUser.uid}
	<div use:portal={'sign-up-area'}>
		<Button on:click={signInWithGoogle}>Google Sign-in</Button>
	</div>
{/if}

<slot>
	
</slot>

<script>
	import { portal } from '../actions.js'
	import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
	import Button, { Label } from '@smui/button';
	import { storeUser } from '../store.js'
	import { collection, getDocs, getDoc, query, where  } from "firebase/firestore"; 
	import db from '../database.js'
	import { onMount } from 'svelte'

	export let areaDocs;
		// handle authentication
		function signInWithGoogle () {
    const provider = new GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.cfom/auth/contacts.readonly');
    const auth = getAuth();

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

	onMount(async () => {
		const auth = getAuth()
	
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;

				storeUser.set(user)

				// fetch database
				try {
					const classesSnapshot = await getDocs(collection(db, 'classes'))
					const allClasses = classesSnapshot.docs.map(doc => {
						return { id: doc.id, ...doc.data() } 
					});
					// console.log('allClasses =', allClasses)
					
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
				console.log('not logged in')
				// User is signed out
				// ...
			}
		});
	})
</script>