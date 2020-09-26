<template lang='pug'>
page-template(
  :pageNumber='4'
)
  page-brief-new
    .brief-paragraph
      strong Skin cancer
      |  is the most common cancer in New Zealand.
      | The skin cancer rate of New Zealand is the highest in the world.
      | Over 90% of skin cancers are due to excess UV exposure in high UV environments like New Zealand. 

    .brief-paragraph
      | But treatment of skin cancer is an expensive cost (through taxes) for New Zealand.
      | It is estimated that skin cancer costs New Zealand over $57 million per year,
      | making it one of the most expensive cancers for the New Zealand health system.
      | The death rate sharply increases when it's not spotted and treated at the early stage.
      | But It's hard to detect with an untrained eye.
  
    template(#extra-content)
      .brief-card-container
        styled-box.brief-card
          p.is-quote
            span.color-featured Early detection
            |  is your best protection.
  
        styled-box.brief-card
          p.is-quote
            | Why? Because the earlier it's found, 
            | the better the chances of beating it!
  
        styled-box.brief-card.is-big
          p
            | How can I help people 
            span.color-featured self-diagnose skin cancer 
            | without having to see an expert using current technologies?
  
  
  .page-section.c-insights.mt-20-10
    h4.mb-4 Insights
  
    .c-insights-container
      styled-box.c-insights-graph
        .graph-unit
          .label.has-text-bold Skin-cancer
          .graph
            .bar.first
            .number.has-text-bold 82,000
        
        .graph-unit
          .label Other kind of cancer
          .graph
            .bar.second
            .number 16,000

        p
          | * NZ's skin cancer rates are the highest in the world.
        
      styled-box.c-insights-text
        featured-list-item.text-item
          | It is one of the most common type of cancer in NZ.
        featured-list-item.text-item
          | Difficulties in the initial discovery.
        featured-list-item.text-item
          |  high-cost diagnosis amount.
  
  field-review
  
  
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
import PageBriefNew from '../PageBriefNew.vue'
import StyledBox from '@components/StyledBox.vue'
import FeaturedListItem from '@components/FeaturedListItem.vue'

import FieldReview from './FieldReview.vue'

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
    PageTemplate,
    PageBriefNew,
    StyledBox,
    FeaturedListItem,
    FieldReview
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

.c-insights-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @include desktop {
    flex-direction: row;
  }

  .c-insights-graph {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $background-white;
    padding: 4rem 2rem;
    margin-bottom: 6rem;
    max-width: 80rem;
    z-index: 1;

    .graph-unit {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-bottom: 2.5rem;
      width: 100%;
      font-size: $size-body-lg;

      .label {
        margin-right: 1rem;
        width: 11rem;
      }
      .graph {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
      .number {
        margin-top: 1.2rem;
        text-align: left;
      }
      .bar {
        position: relative;
        display: block;
        flex-shrink: 1;
        height: 2.6rem;
        width: 11rem;

        &::after {
          display: block;
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: var(--feature-color);
          border-radius: 0.4rem;
        }

        &.second::after {
          width: 20%;
          background-color: $background-grey;
        }
      }
    }

    p {
      text-align: center;
      font-size: $size-body-xxl;
      margin-top: 2rem;
    }

    @include phoneblet {
      margin-bottom: 8rem;
      padding: 4rem;

      .graph-unit {
        font-size: $size-body-xxl;
        
        .label {
          width: 12rem;
          margin-right: 1.2rem;
        }

        .bar {
          width: 15rem;
        }
      }
    }

    @include tablet {
      padding: 6rem;

      .graph-unit {

        .label {
          width: 14rem;
        }

        .graph {
          flex-direction: row;
        }

        .number {
          text-align: right;
          margin-left: 1.4rem;
          margin-top: 0;
        }
      }
    }

    @include desktop {
      min-height: 36rem;
      margin-bottom: 0;
    }

    @include largescreen {
      min-width: 60rem;

      .graph-unit {
        font-size: $size-body-huge;
      }
      .graph-unit .bar {
        width: 20rem;
      }

      p {
        font-size: $size-body-huge;
      }
    }
  }

  .c-insights-text {
    background-color: $background-white;
    padding: 4rem;
    max-width: 50rem;

    .text-item {
      font-size: $size-body-xl;

      &:not(:last-child) {
        margin-bottom: 2.5rem;
      }
    }

    @include tablet {
      padding: 6rem;
    }

    @include desktop {
      padding-left: 10rem;
      margin-left: -5rem;

      .text-item {
        font-size: $size-body-xxl;
      }
    }

    @include largescreen {
      min-width: 60rem;
      max-width: 80rem;

      .text-item {
        font-size: $size-body-huge;
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