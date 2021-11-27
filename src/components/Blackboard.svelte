<!-- FUTURE: use "drawable" Svelte action to handle the touch event listeners -->
<canvas use:displayable style="background-color: black;">

</canvas>

<script>
  import { drawStroke } from '../canvasDraw.js'
  import { onMount } from 'svelte'

  export let strokesArray

  console.log('strokesArray =', strokesArray)

  function displayable (canvas) {
    let ctx = canvas.getContext('2d')
    // display all strokes
    for (const stroke of strokesArray) {
      drawStroke(stroke, null, ctx, canvas)
    }
  }
</script>