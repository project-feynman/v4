
<slot fetchStrokes={fetchStrokes} strokesArray={strokesArray}>
  
</slot>

<script>
  import { fetchDocs } from '../database.js'
  export let dbPath
  let strokesArray

  async function fetchStrokes () {
    console.log('intersection triggered fetchStrokes()')
    strokesArray = await fetchDocs(dbPath)
  }
</script>