<template lang='pug'>
component.c-project-list-item(
  :is='tag'
  v-on='$listeners'
  @mousemove='moveHandler'
) 
  image-box.c-image(
    :style='imgStyleObj'
    :bgColor='itemInfo.number'
    :path='imgPath'
  )

  p.c-name.heading {{ itemInfo.projectName }}

  .c-description
    span.project-type(
      :class="{ 'commercial': itemInfo.isCommercial }"
    ) {{ itemInfo.isCommercial ? 'Commercial Project' : 'Personal Project' }}
    
    span.project-client(
      v-if="itemInfo.isCommercial"
    ) {{ itemInfo.client }}
</template>

<script>
import ImageBox from '@components/ImageBox.vue'

export default {
  name: 'ProjectListItem',
  components: {
    ImageBox
  },
  data () {
    return {
      imgStyleObj: {
        marginLeft: '0px',
        marginTop: '0px'
      }
    }
  },
  computed: {
    imgPath () {
      return require(`@/assets/images/main/0${this.itemInfo.number}.jpg`)
    }
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    itemInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    moveHandler({ target, clientX, clientY }) {
      const MARGIN_X_MAX = 80
      const MARGIN_Y_MAX = 60

      const {
        top, left, width, height 
      } = target.getBoundingClientRect()
      const [ dx, dy ] =
        [ clientX - left, clientY - top ]
      const [ fx, fy ] = [
        (dx - width/2) / width * 2,
        (dy - height/2) / height * 2
      ]
      const [ marginLeft, marginTop ] = 
        [ fx * MARGIN_X_MAX, fy * MARGIN_Y_MAX ]

      this.imgStyleObj.marginLeft = `${marginLeft}px`
      this.imgStyleObj.marginTop = `${marginTop}px`
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-project-list-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid $text-grey-dark;
  cursor: pointer;

  > * {
    pointer-events: none;
  }

  .c-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    opacity: 0.8;
    visibility: hidden;
  }

  .c-name {
    position: relative;
    z-index: 1;
    font-size: 5rem;
  }

  .c-description {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: right;
    line-height: 1.5;
    font-size: $size-body-sm;
    z-index: 1;

    .project-type {
      display: inline-block;
      font-weight: 700;
    }
    .project-type::before {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 1rem;
      background-color: $text-grey;
      margin-right: 0.5rem;
    }
    .project-type.commercial::before {
      background-color: $text-red;
    }
  }

  &:hover {
    background-color: #F4F4F4;
    
    .c-image {
      visibility: visible;
    }
  }
}
</style>