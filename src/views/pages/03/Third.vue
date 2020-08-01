<template lang='pug'>
page-template(
  :pageNumber='3'
)
  .element-container.c-output
    img(:src='imgPaths.output_1')
    img(:src='imgPaths.output_2')
    img(:src='imgPaths.output_3')

  page-brief(
    contentTitle='Solution'
  )
    .brief-para.c-brief-child_1
      | How can I make my bucket list
      | happen without giving up or forgetting
      span.has-highlighter in a fun way?

    .brief-para
      strong 45.8% 
      | People say they
      strong cannot put their plans into action.
      | The reason why they cannot practice is because they do not 
      | have enough money, and they postpone things to do.

    .brief-para
      .c-solution-item(
        v-for="item in briefSolutionList"
        :key="item.number"
      )
        h5.number {{ item.number }}
        .title.has-highlighter {{ item.title }}
        .content {{ item.content }}

  .element-container.c-logos
    img.c-logos-img(:src='imgPaths.logos')
  
  .element-container.c-target
    h3.element-container__title.is-big Target Market

    .element-container__para.c-target-intro
      img.c-target-img(:src='imgPaths.target_1')
      img.c-target-img(:src='imgPaths.target_2')
      img.c-target-img(:src='imgPaths.target_3')

      .c-target-keywords
        span 22-40
        span Goal-oriented
        span Future-oriented
        span Passionate
    
    .element-container__para.is-full-width.c-target-description
      img.c-target-description-img(:src='imgPaths.description')

  .element-container.c-pic-grid
    img.c-pic-grid-img(:src='imgPaths.picgrid')

  .element-container.c-outcome
    .element-container__para.is-full-width
      img.c-outcome-img(:src='imgPaths.outcome_1')
      img.c-outcome-img(:src='imgPaths.outcome_2')
      img.c-outcome-img(:src='imgPaths.outcome_3')
</template>

<script>
import PageTemplate from '../PageTemplate.vue'
import PageBrief from '../PageBrief.vue'

export default {
  name: 'Third',
  components: {
    PageTemplate,
    PageBrief
  },
  data () {
    return {
      briefSolutionList: [
        { 
          number: '01',
          title: 'No money',
          content: "Dreamlist provide many potential bucketlists even If you have no money."
        },
        { 
          number: '02',
          title: 'No motivation',
          content: "You can get motivated by exploring people's bucketlists and talking to cool people with same dreams as you." 
        },
        { 
          number: '03',
          title: 'No willingness',
          content: "It provides feeds that recommand you the suitable contents." 
        }
      ]
    }
  },
  computed: {
    imgPaths() {
      const path = fileName => require('@/assets/images/03/' + fileName)

      return {
        output_1: path('output-1.png'),
        output_2: path('output-2.png'),
        output_3: path('output-3.png'),
        logos: path('logos.png'),
        target_1: path('target-1.jpg'),
        target_2: path('target-2.jpg'),
        target_3: path('target-3.jpg'),
        description: path('description.jpg'),
        picgrid: path('pic-grid.png'),
        outcome_1: path('outcome-1.jpg'),
        outcome_2: path('outcome-2.jpg'),
        outcome_3: path('outcome-3.jpg')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-output {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    display: block;
    width: 60%;
    box-shadow: $img-box-shadow;

    &:first-child {
      margin-right: -12.5vw;
      margin-top: -5vh;
    }
    &:nth-child(2) {
      margin-top: -12.5vh;
    }
    &:last-child {
      margin-top: -12.5vh;
      margin-left: -12.5vw;
    }
  }
}

.c-brief-child_1 {
  color: $text-grey;
  font-size: 3rem;
}

.c-solution-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  .number {
    margin-right: 1.5rem;
    color: $ref_03;
    font-size: 5rem;
    min-width: 10rem;

    &::after {
      content: '.'
    }
  }

  .title,
  .content {
    font-size: $size-body-lg;
  }

  .title {
    display: inline-block;
    margin-right: 2rem;
    min-width: max-content;
  }

  .content {
    flex-grow: 1;
  }
}

.has-highlighter {
  display: block;
  position: relative;
  width: max-content;
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 110%;
    height: 60%;
    bottom: -5%;
    left: -5%;
    opacity: 0.5;
    background-color: #F4CFFF;
    z-index: -1;
  }
}

.c-logos {
  padding: 7rem;
  background-color: $background-light-grey;

  .c-logos-img {
    display: block;
    width: 85vw;
    margin: 0 auto;
  }
}

.c-target {
  &-intro {
    display: flex;
    margin-top: 2rem;
    align-items: flex-start;
    justify-content: center;

    @for $n from 1 through 3 {
      > img:nth-child(#{$n}) {
        margin-top: calc(6rem * #{$n - 1});
      }
    }
  }

  &-img {
    display: block;
    width: 23rem;
    height: auto;
  }

  &-keywords {
    display: flex;
    flex-direction: column;
    font: {
      family: 'Goku';
      size: 3rem;
      weight: 900;
    }
    white-space: nowrap;
    margin-top: 28rem;
    margin-left: -2rem;
  }

  &-description {
    margin-top: 5rem;
  }

  &-description-img {
    display: block;
    width: 100%;
    margin: 0;
  }
}

.c-pic-grid {
  position: relative;
  height: 27.5vw;
  margin-top: 30rem;
  margin-bottom: 0;
  background-color: $ref_03;

  &-img {
    position: absolute;
    width: 105%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.c-outcome {
  margin-top: 0;

  &-img {
    display: block;
    width: 100%;
    margin-bottom: 3rem;
  }
}
</style>