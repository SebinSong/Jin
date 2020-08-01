<template lang='pug'>
page-template(
  :pageNumber='2'
)
  .element-container.c-output
    img(:src='imgPaths.output')
  
  page-brief(
    contentTitle='Question'
  )
    .brief-para
      | Auckland Art Gallery's 
      strong volunteers 
      | have brought thier remarkable collection of artworks to life for over 30 years.
      | They require finding a creative way to bring more volunteers into it;
      | While also providing them with a wider range of volunteers. 
    
    .brief-para
      | How can we encourage and inspire young people to volunteer by themselves?
    
    .brief-para
      | To hold 
      strong an interactive voting system screen
      | inside the gallery aimed at displaying the artworks to attract and encourage more
      | young people and they have the opportunity to work within the art gallery,
      | providing a stepping stone into the art industry.

  .c-motive
    img.c-img-1(:src='imgPaths.motive_1')
    img.c-img-2(:src='imgPaths.motive_2')

  .element-container.c-outcome
    img.c-img-outcome(:src='imgPaths.outcome')
</template>

<script>
import PageTemplate from '../PageTemplate.vue'
import PageBrief from '../PageBrief.vue'

export default {
  name: 'Second',
  components: {
    PageTemplate,
    PageBrief
  },
  computed: {
    imgPaths() {
      const path = fileName => require('@/assets/images/02/' + fileName)

      return {
        output: path('output.jpg'),
        motive_1: path('motive-1.jpg'),
        motive_2: path('motive-2.jpg'),
        outcome: path('outcome.jpg')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-output {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  padding-bottom: 0;

  img {
    display: block;
    width: 80vw;
    min-width: $page-min-width;
  }
}

.c-motive {
  position: relative;
  width: auto;
  height: 100vh;
  margin: 0 $content-side-padding 6rem;

  img {
    position: absolute;
    display: block;
    width: 52.5%;
    height: auto;
    box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem rgba(0,0,0,0.05);
  }

  .c-img-1 {
    top: 0;
    left: 0;
  }
  .c-img-2 {
    right: 0;
    bottom: 0;
  }
}

.c-outcome {
  .c-img-outcome {
    display: block;
    width: 100%;
  }
}
</style>