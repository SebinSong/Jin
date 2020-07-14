<template lang='pug'>
.c-unashamed
  page-toolbar

  .c-section.is-first
    .c-page-introduction
      .c-text
        h3.c-number {{ projectData.number }}
        h3.c-title {{ projectData.title }}
        .c-introduction(
          v-html='projectData.introduction'
        )
      img.c-top-main-image(
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
      :src='imgPaths.rep'
    )

  .c-brief
    h3.c-brief__title Brief

    img.c-brief__top-image(
      :src='imgPaths.briefTopImage'
    )

    .c-brief__content
      h4.content-title Current Situation
      .content-main
        .content-para 
          | Current systems do not provide teachers with effective resources 
          | when it comes to teaching contraception in their classroom’s.
          | There is no set standard on what to teach or how to teach this sensitive topic.

        .content-para
          | A lot of individual teachers tend to make their own decisions on
          | what and when to teach, due to the lack of resources they have.This is not great,
          | as the teachers may be holding back informationthat can be crucial or life-changing to learners.
  
  .c-prototype
    h3.c-prototype__title
      span Unasham
      span.red-text ed

    .c-prototype__content 
      | The words 
      strong “Unashamed”
      | resembles that we are a teaching resource that is not shy to talk about you.
      | To not be ashamedto learn about contraception but simply embrace it.
      | “ED” represents that we provide Sexual Education resources.

    button.c-prototype__btn Jump To Prototype

  .c-element-container.c-contribution
    h3.c-element-container__title My Contribution

    .c-element-container__para
      | My role was character designer and UI designer,
      | mainly in charge of visual decision making.
    .c-element-container__para
      strong During the research phase,
      | based on the feedback.
      | The feedback was how can we extend the sex-ed or bring this conversation online
      | and not just be restricted to the classroom.
    .c-element-container__para  
      strong During the ideation phase,
      | brand image, initial wireframe,
      | the prototype for the website, and a digital quiz game as a class activity.

  .c-element-container.c-insight
    h3.c-element-container__title Our Insights

    .c-element-container__para
      | “How many lessons are put aside to address contraception?”

    .c-element-container__para
      arrow
</template>

<script>
import PageToolbar from '@components/PageToolbar.vue'
import Arrow from '@components/Arrow.vue'
import { pageData } from '@utils/resources.js'

export default {
  name: 'Unashamed',
  data () {
    return {
      projectData: pageData['01']
    }
  },
  components: {
    PageToolbar,
    Arrow
  },
  computed: {
    imgPaths () {
      return {
        topMain: require('@/assets/images/01/top-image.png'),
        rep: require('@/assets/images/01/rep-image.jpg'),
        briefTopImage: require('@/assets/images/01/brief-image.png')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

$feature-color: $ref_01;
$right-margin: 8rem;
$content-side-padding: 18rem;

.c-unashamed {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}

.c-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border-bottom: 1px solid $background-grey;

  &.is-first {
    padding-top: $page-toolbar-height;
  }
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
      color: $feature-color;
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
        background-color: $feature-color;
        top: 0;
        left: 0;
      }
    }
  }

  .c-top-main-image {
    display: inline-block;
    width: 50rem;
    height: auto;
  }
}

.c-feature-box {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30rem;
  height: 30rem;
  background-color: $feature-color;
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
    color: $feature-color;
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
  
  .c-rep-image {
    position: absolute;
    left: 15rem;
    bottom: 7rem;
    display: block;
    width: 60vw;
    max-width: 80rem;
    max-height: 42rem;
  }
}

.c-brief {
  position: relative;
  padding: 12rem $content-side-padding;

  &__title {
    font-size: 9rem;
  }

  &__content {
    display: flex;
    align-items: flex-end;

    .content-title {
      font-size: 3rem;
      margin-right: 4rem;
    }

    .content-para {
      margin-bottom: 7rem;
      font-size: $size-body-md;
    }
    .content-para:last-child {
      margin-bottom: 0;
    }
  }

  &__top-image {
    position: absolute;
    top: -8rem;
    right: 18rem;
    width: 30rem;
  }
}

.c-prototype {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 3rem;
  margin-bottom: 7rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 15rem;
    height: 1px;
    border-bottom: 2px dashed $text-grey-dark;
  }

  &__title {
    font-size: 7rem;
    margin-bottom: 3rem;

    .red-text {
      color: $text-red;
    }
  }

  &__content {
    max-width: 55rem;
    font-size: $size-body-md;
    margin-bottom: 4rem;
  }

  &__btn {
    $btn-height: 4.5rem;

    display: flex;
    height: $btn-height;
    line-height: $btn-height;
    border-radius: $btn-height;
    font-size: $size-body-md;
    border: 1px solid $text-grey-dark;
    background-color: $background-white;
    color: $text-grey-dark;
    padding: 0 2.5rem;
  }
  &__btn:hover {
    font-weight: 700;
    border-width: 2px;
  }
}

.c-element-container {
  position: relative;
  padding-left: $content-side-padding;
  padding-right: $content-side-padding;
  margin-bottom: 7rem;
  font-size: $size-body-md;

  .c-element-container__title {
    font-size: 2.4rem;
    margin-bottom: 3rem;
    letter-spacing: 0.5px;
  }
  .c-element-container__para {
    margin-bottom: 2rem;
  }

  strong {
    display: inline-block;
    margin-right: 0.7rem;
  }
}
</style>