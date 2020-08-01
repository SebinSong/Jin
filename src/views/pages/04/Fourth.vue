<template lang='pug'>
page-template(
  :pageNumber='4'
)
  .element-container.c-brief
    img.bg-pattern-top(:src='imgPaths.bgPattern_top')
    img.bg-pattern-bottom(:src='imgPaths.bgPattern_bottom')
    img.bg-top(:src='imgPaths.brief')

    .c-brief-content
      h3.title Brief

      .content-line
        .label Problem
        .para
          strong Skin cancer
          | is the most common cancer in New Zealand.
          | You can be cured melanoma at an early stage people.
          | However, It cannot be distinguished by our naked eye.

      .content-line
        .label Solution
        .para
          strong The smart mirror
          | with AI system, is designed to look deep inside a mole's structure
          | to detect any potential skin cancers that can't be seen with visual checks.
  
  .element-container.c-key-service
    .element-container__para.c-key-service-keywords
      img(:src='imgPaths.keyService_1')

      .keywords-list
        .label Key Services

        .item(
          v-for='item in keywordsList'
          :key='item.num'
        )
          span.num {{ item.num }}
          span.keyword {{ item.keyword }}

    .element-container__para
      img.c-keyword-img-2(:src='imgPaths.keyService_2')

  .element-container.c-app-service
    h3.element-container__title.is-big App service

    .element-container__para.c-app-service-description
      | Keep track your skin with self checks.
      br
      | You can connect with your phone device with smart mirror.
      br
      | AI can tells your skin condition and detect any potentials of Melanoma.

    .element-container__para.c-app-service-outcome
      img.c-app-service-outcome-img(:src='imgPaths.outcome_1')
      img.c-app-service-outcome-img(:src='imgPaths.outcome_2')
</template>

<script>
import PageTemplate from '../PageTemplate.vue'

export default {
  name: 'Fourth',
  data () {
    return {
      keywordsList: [
        { num: '01', keyword: 'Dignosis' },
        { num: '02', keyword: 'Notification' },
        { num: '03', keyword: 'Schedule' },
      ]
    }
  },
  components: {
    PageTemplate
  },
  computed: {
    imgPaths () {
      const path = fileName => require('@/assets/images/04/' + fileName)

      return {
        bgPattern_top: path('bgpattern-top.png'),
        bgPattern_bottom: path('bgpattern-bottom.png'),
        brief: path('brief.png'),
        keyService_1: path('key-service.jpg'),
        keyService_2: path('key-service-2.jpg'),
        outcome_1: path('outcome-1.jpg'),
        outcome_2: path('outcome-2.jpg')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";
$brief-bg: #333333;

.c-brief {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: $brief-bg;
  padding-top: 32.5vh;
  margin-bottom: 0;

  img {
    position: absolute;

    &.bg-pattern-top {
      height: 27.5vh;
      width: auto;
      right: 0;
      top: 0;
    }

    &.bg-pattern-bottom {
      height: 25vh;
      width: auto;
      right: 0;
      bottom: 0;
    }

    &.bg-top {
      height: 60vh;
      width: auto;
      top: 0;
      left: 10vw;
      transform: translateY(-20%);
    }
  }

  &-content {
    color: $text-white;

    .title {
      color: $text-white;
      font-size: 9rem;
      text-align: right;
      margin-bottom: 2rem;
    }

    .content-line {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;

      .label {
        min-width: 20rem;
        margin-right: 2rem;
        font: {
          family: 'Goku';
          weight: 700;
          size: 5rem;
        }
      }

      .para {
        flex-grow: 1;

      }
    }
  }
}

.c-key-service {
  background-color: $background-light-grey;
  padding-top: 2rem;
  padding-bottom: 2rem;

  &-keywords {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      display: block;
      width: 42rem;
      margin-right: 8.5rem;
    }

    .keywords-list {
      display: flex;
      flex-direction: column;

      .label {
        font: {
          family: 'Goku';
          weight: 700;
          size: 5rem;
        }
        margin-bottom: 2rem;
      }
      .item {
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;

        &:last-child {
          margin-bottom: 0;
        }

        > span {
          display: inline-block;
        }

        > span.num {
          font: {
            family: 'Goku';
            weight: 700;
            size: 5rem;
          }
          color: $ref_04;
          margin-right: 2rem;
        }

        > span.keyword {
          font-size: $size-body-xl;
        }
      }

    }
  }

  .c-keyword-img-2 {
    display: block;
    width: 80%;
    margin: 4rem auto 0;
  }
}

.c-app-service {

  &-description {
    text-align: center;
    margin-bottom: 5rem;
  }

  &-outcome-img {
    display: block;
    width: 80%;
    margin: 0 auto 4rem;
  }
}
</style>