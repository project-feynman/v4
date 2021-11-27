<LeftDrawer>
  <Blackboard/>
</LeftDrawer>
<!-- <CardsDemo></CardsDemo> -->

<!-- <pre class="status">Clicked: {clicked}</pre>

<div style="display: flex; flex-wrap: wrap; align-items: center;">
  <Button><Label>Button with a Label</Label></Button>
 
  <Fab extended><Label>Fab with a Label</Label></Fab>
 
  <IconButton><Icon class="material-icons">favorite</Icon></IconButton>
 
  <Fab><Icon class="material-icons">favorite</Icon></Fab>
</div> -->

<Button on:click={signInWithGoogle}>Sign in with Google</Button>
 
<script>
  import CardsDemo from '../CardsDemo.svelte'
  import Button, { Label } from '@smui/button';
  import LeftDrawer from '../LeftDrawer.svelte'
  import Blackboard from '../Blackboard.svelte'
  import { db } from '../database.js'
  import { collection, getDocs } from "firebase/firestore"; 
  import { onMount } from 'svelte';
  import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

  onMount(async () => {

  })

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
          const allClasses = classesSnapshot.docs.map(doc => doc.data());
          console.log('allClasses =', allClasses)
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