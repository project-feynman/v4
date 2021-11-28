<!-- FUTURE: use "drawable" Svelte action to handle the touch event listeners -->
<canvas 
  use:resizable={{strokesArray}}
>
</canvas>

<script>
  import { resizable } from '../helpers/canvasHelpers.js'

  // resize module
  // draw module
  export let strokesArray
</script>