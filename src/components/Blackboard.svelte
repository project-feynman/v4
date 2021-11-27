<!-- FUTURE: use "drawable" Svelte action to handle the touch event listeners -->
<canvas use:displayable style="background-color: #2e3131;">

</canvas>

<script>
  import { drawStroke } from '../canvasDraw.js'
  export let strokesArray

  function displayable (canvas) {
    let ctx = canvas.getContext('2d')
    let resizeDebouncer = null

    function redrawCanvas () {
      for (const stroke of strokesArray) {
        drawStroke(stroke, null, ctx, canvas)
      }
    }

    const hundredMilliseconds = 100

    function debouncedResizeHandler () {
      if (resizeDebouncer) clearTmeout(resizeDebouncer)
      setTimeout(() => {
        resizeCanvas()
        redrawCanvas()
      }, hundredMilliseconds)
    }

    function resizeCanvas () {
      if (resizeDebouncer) clearTmeout(resizeDebouncer)
     
      // calculate size
      let videoHeight
      let videoWidth
      const appElement = document.getElementById('main-content')
      const availableHeight = appElement.clientHeight
      const availableWidth= appElement.clientWidth
      const aspectRatio = 4/3
      if (availableWidth * (1/aspectRatio) < availableHeight) {
        videoWidth = availableWidth;
        videoHeight = videoWidth * (1/aspectRatio);
      } else {
        videoHeight = availableHeight;
        videoWidth = videoHeight * aspectRatio;
      }

      // perform the resize
      // internal dimensions (true scale factor)
      // canvas.style.width = videoWidth
      // canvas.style.height = videoHeight

      canvas.width = videoWidth
      canvas.height = videoHeight

      // visible, external dimension
      // canvas.style.scrollWidth = videoWidth
      // canvas.style.scrollHeight = videoHeight
      // then have a listener

      // TODO: debounce 
      window.addEventListener('resize', debouncedResizeHandler)
    }
    
    // initial render must be fast, not delayed
    resizeCanvas()
    redrawCanvas()

    return {
      destroy () {
        window.removeEventListener('resize', debouncedResizeHandler)
      }
    }
  }
</script>