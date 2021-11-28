
<slot {boardDoc} {fetchStrokes} {isFetchingStrokes} {strokesArray}>
  
</slot>

<script>
  import { fetchDoc, fetchDocs } from '../database.js'
  export let dbPath
  let isFetchingStrokes = false
  let boardDoc
  let strokesArray

  async function init () {
    const result = await fetchDoc(dbPath)
    boardDoc = result // I want boardDoc to be fully hydrated to simplify things for the clients
  }
  init()


  // lazy-load for strokes
  async function fetchStrokes () {
    isFetchingStrokes = true
    console.log('intersection triggered fetchStrokes()')
    strokesArray = await fetchDocs(dbPath + '/strokes')
  }
</script>