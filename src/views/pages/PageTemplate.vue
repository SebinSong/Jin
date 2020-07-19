<template lang='pug'>
.c-page(
  :class="'is-' + pageNumber"
)
  page-toolbar

  .c-first-section
    .c-page-introduction
      .c-text
        h3.c-number {{ projectData.number }}
        h3.c-title {{ projectData.title }}
        .c-introduction(
          v-html='projectData.introduction'
        )
      img.c-top-main-image(
        v-if='imgPaths.topMain'
        :src='imgPaths.topMain'
      )
    
    .c-feature-box

    .c-sub-information
      .c-line
        .c-label My Role
        .c-content {{ projectData.role }}

      .c-line
        .c-label Project Type
        .c-content {{ projectData.projectType }}

      .c-line
        .c-label Team Members
        .c-content {{ projectData.members }}
  
  .c-grey-image-box
    img.c-rep-image(
      v-if='imgPaths.pageIntro'
      :src='imgPaths.pageIntro'
    )
    .c-rep-image-placeholder(
      v-else
    )

  slot

  .element-container
    prev-next(:currentPageNumber='pageNumber')
  
</template>

<script>
import PageToolbar from '@components/PageToolbar.vue'
import PrevNext from '@components/PrevNext.vue'
import { pageData } from '@utils/resources.js'

export default {
  name: 'PageTemplate',
  data () {
    return {
      projectData: null
    }
  },
  components: {
    PageToolbar,
    PrevNext
  },
  props: {
    pageNumber: {
      type: Number,
      required: true
    }
  },
  computed: {
    imgPaths () {
      const {
        topMain,
        pageIntro
      } = this.projectData.imgs

      return {
        topMain: topMain ? require(`@/assets/images/pageMain/${topMain}`) : null,
        pageIntro: pageIntro ? require(`@/assets/images/pageIntro/${pageIntro}`) : null
      }
    }
  },
  created () {
    this.projectData = pageData[`0${this.pageNumber}`]
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

$map: (
  "1": $ref_01,
  "2": $ref_02,
  "3": $ref_03,
  "4": $ref_04,
  "5": $ref_05
);

.c-page {
  height: auto;
  @each $num, $color in $map {
    &.is-#{$num} { --feature-color: #{$color}; }
  }
}

.c-first-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border-bottom: 1px solid $background-grey;
  padding-top: $page-toolbar-height;

}

.c-page-introduction {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;

  .c-text {
    .c-number {
      font: {
        size: 10rem;
        weight: 700;
      }
      color: var(--feature-color);
      line-height: 1;
    }

    .c-title {
      font: {
        size: 9rem;
        weight: 700;
      }
      color: $text-black;
      line-height: 1.3;
    }

    .c-introduction {
      position: relative;
      max-width: 42rem;
      font-size: $size-body-md;
      color: $text-grey;
      padding-left: 10rem;

      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 7.7rem;
        height: 3px;
        background-color: var(--feature-color);
        top: 0;
        left: 0;
      }
    }
  }

  .c-top-main-image {
    display: inline-block;
    width: auto;
    height: 37rem;

  }
}

.c-feature-box {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30rem;
  height: 30rem;
  background-color: var(--feature-color);
  z-index: -1;
}

.c-sub-information {
  position: absolute;
  max-width: 20rem;
  bottom: 7rem;
  right: 22rem;

  .c-line {
    font-weight: 700;
    font-size: $size-body-sm;
  }
  .c-line:not(:last-child) {
    margin-bottom: 3.5rem;
  }

  .c-line > .c-label {
    text-decoration: underline;
    color: var(--feature-color);
    margin-bottom: 1.2rem;
  }

  .c-line > .c-content {
    color: $text-black;
  }
}

.c-grey-image-box {
  position: relative;
  width: 100%;
  height: 25rem;
  background-color: $background-grey;
 
  .c-rep-image,
  .c-rep-image-placeholder {
    position: absolute;
    left: 15rem;
    bottom: 7rem;
    display: block;
    width: 60vw;
    max-width: 80rem;
    max-height: 42rem;
  }

  .c-rep-image-placeholder {
    border: 1px dashed var(--feature-color);
  }
}


</style>