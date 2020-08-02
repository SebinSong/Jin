<template lang="pug">
svg.c-canvas(
  ref='canvas'
)
  path.c-path(ref='path')
</template>

<script>
export default {
  name: 'MeshBackground',
  mounted () {
    const canvas = this.$refs.canvas
    const pathEl = this.$refs.path
    const viewBox = {
      w: null, h: null
    }

    const MESH_SIDE_LENGTH = 20
    let columnAmount, rowAmount, d

    init()
    d = ''

    for(let i=0; i<columnAmount; i++) {
      const currentX = i * MESH_SIDE_LENGTH
      d += `M${currentX},0 L${currentX},${viewBox.h} `
    }
    for(let j=0; j<rowAmount; j++) {
      const currentY = j * MESH_SIDE_LENGTH
      d += `M0,${currentY} L${viewBox.w},${currentY} `
    }
    pathEl.setAttribute('d', d)

    function init () {
      const { width, height } = canvas.getBoundingClientRect()

      viewBox.w = width
      viewBox.h = height

      columnAmount = Math.ceil(viewBox.w / MESH_SIDE_LENGTH)
      rowAmount = Math.ceil(viewBox.h / MESH_SIDE_LENGTH)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.c-path {
  fill: none;
  stroke: #E2DCDC {
    width: 1px;
  }
}

</style>