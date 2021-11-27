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
 
<script>
  import CardsDemo from '../CardsDemo.svelte'
  import LeftDrawer from '../LeftDrawer.svelte'
  import Blackboard from '../Blackboard.svelte'
  import db from '../database.js'
  import { collection, getDocs } from "firebase/firestore"; 

  console.log('db =', db)

  async function fetchDB() {
    try {
      const classesSnapshot = await getDocs(collection(db, 'classes'))
      const allClasses = classesSnapshot.docs.map(doc => doc.data());
      console.log('allClasses =', allClasses)

      // const docRef = await addDoc(collection(db, "users"), {
      //   first: "Ada",
      //   last: "Lovelace",
      //   born: 1815
      // });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  fetchDB()

</script>

<style>
  body { 
    margin: 0; 
    padding: 0;
  }
</style>