<canvas 
  use:resizable={{strokesArray, onResize}}
  bind:this={canvas}
>

</canvas>
<Slider
  bind:value={currentFrameIdx}
  min={0}
  max={allFrames.length + 1}
  step={1}
  discrete
  input$aria-label="Discrete slider"
/>
<Button on:click={syncRecursively}>Play</Button>
 

<pre class="status">Value: {value}</pre>
 
<script>
  import { resizable } from '../helpers/canvasHelpers.js'
  import { connectTwoPoints } from '../helpers/canvasDraw.js'
  import Slider from '@smui/slider';
  import Button from '@smui/button'
  import { onMount, onDestroy } from 'svelte'

  export let strokesArray;

  let canvas
  let ctx
  let allFrames = []
  let currentFrameIdx = 0
  let playbackSpeed = 1
  let recursiveSyncer 

  let value = 0;

  onDestroy(() => {
    if (recursiveSyncer) clearTimeout(recursiveSyncer)
  })
  
  onMount(() => {
    ctx = canvas.getContext('2d')
    const allPoints = [];
    for (let i = 0; i < strokesArray.length; i++) {
      for (let j = 1; j < strokesArray[i].points.length; j++) {
        const frame = { strokeIndex: i, pointIndex: j };
        allPoints.push(frame);
      }
    }
    allFrames = allPoints
  })

  async function syncRecursively () {
    console.log('sync recursively')
    console.log('nextFrameIdx =', currentFrameIdx)
    console.log('allFrames =', allFrames)
    // syncAnimation()
    if (currentFrameIdx < allFrames.length) {
      for (let i = 0; i <= currentFrameIdx; i++) {
        await renderFrame(allFrames[i], true)
      }

      // play around with sleep duration,
      const timeTilNextStroke = 1000 
      currentFrameIdx += 5
      recursiveSyncer = setTimeout(syncRecursively, timeTilNextStroke/playbackSpeed); // use recursion instead of `setInterval` to prevent overlapping calls
    }
  }

  async function onResize () {
    console.log('resized')
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i <= currentFrameIdx; i++) {
      await renderFrame(allFrames[i], true); // draw 1 stroke per event loop
    }
  }

  async function renderFrame ({ strokeIndex, pointIndex }, instantly = false) {
    const stroke = strokesArray[strokeIndex];
    const lineWidth = stroke.lineWidth; 
    const normalizedLineWidth = lineWidth * (canvas.scrollWidth / 1000);
    connectTwoPoints(
      stroke.points, 
      pointIndex, 
      stroke.isErasing, 
      ctx,
      stroke.color,
      normalizedLineWidth,
      canvas
    )
    if (!instantly) {
      await new Promise(resolve => setTimeout(resolve, 10/playbackSpeed)); // Here the second parameter 10/this.playbackSpeed determines the number of frames rendered per second
    }
  }
</script>

