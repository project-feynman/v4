
<slot strokesArray={strokesArray}>
  
</slot>

<script>
  import { fetchDocs } from '../database.js'
  export let dbPath
  let strokesArray = fetchDocs(dbPath)
</script>