<template lang='pug'>
page-template(
  :pageNumber='1'
)
  page-brief(
    :imgPath='imgPaths.briefTopImage'
    contentTitle='Current Situation'
  )
    .brief-para 
      | Current systems do not provide teachers with effective resources 
      | when it comes to teaching contraception in their classroom’s.
      | There is no set standard on what to teach or how to teach this sensitive topic.

    .brief-para
      | A lot of individual teachers tend to make their own decisions on
      | what and when to teach, due to the lack of resources they have.This is not great,
      | as the teachers may be holding back informationthat can be crucial or life-changing to learners.

          
  .element-container.has-divider.c-prototype
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

  .element-container.c-contribution
    h3.element-container__title My Contribution

    .element-container__para
      | My role was character designer and UI designer,
      | mainly in charge of visual decision making.

    .element-container__para
      strong During the research phase,
      | based on the feedback.
      | The feedback was how can we extend the sex-ed or bring this conversation online
      | and not just be restricted to the classroom.

    .element-container__para  
      strong During the ideation phase,
      | brand image, initial wireframe,
      | the prototype for the website, and a digital quiz game as a class activity.

  .element-container.c-insight
    h3.element-container__title Our Insights

    .element-container__para
      | “How many lessons are put aside to address contraception?”

    .element-container__para
      .flex-v-center
        arrow(
          :isRed='true'
          :toRight='true'
        )
        | Only 1 hour lesson

      .flex-v-center
        arrow(
          :isRed='true'
          :toRight='true'
        )
        | Lessons are outdated and boring

    .element-container__para.flex-v-center
      img.c-graph-image(:src="imgPaths.graph")

      p
        | Also,
        strong 91%
        | of students are finding their contraception information at school,
        | and they are only supplied with a 1 hour lesson unless they choose to take up health in level 1, 2 or 3. 
        | Plus there are schools out there wanting to improve their contraception teaching methods and systems. So we questioned that
        strong Is this really enough? Can we improve this somehow?
  
  .element-container.c-reviews
    h3.element-container__title Field Reviews

    .element-container__para
      | There are many campaigns around the world among students and teachers saying that the sex-ed should be improved.
      | For students to get more accurate and comprehensive sexual health in their schools,
      | they provide various services to explore this topic.

    .element-container__para.c-logo-list
      img.c-logo(:src='imgPaths.logo1')
      img.c-logo(:src='imgPaths.logo2')
      img.c-logo(:src='imgPaths.logo3')
      img.c-logo(:src='imgPaths.logo4')

  .element-container.c-solution
    h3.element-container__title Our solution

    .element-container__para.flex-v-center
      .c-solution-img-container
        img(:src='imgPaths.des')
        img(:src='imgPaths.topMain')
      .c-solution-bullet-list
        .c-bullet-list-item
          | Was to help support teachingcontraception in a classroom ordistanced digital learning space.
        .c-bullet-list-item
          | We approached it in a fun &interactive way.
        .c-bullet-list-item  
          | By using a range of resources,activities and information to helpteach this sensitive topic.

  .element-container.has-divider.c-test
    h3.element-container__title User test

    .element-container__para.c-test-img-container
      img.c-test-img(:src='imgPaths.test1')
      img.c-test-img(:src='imgPaths.test2')
      img.c-test-img(:src='imgPaths.test3')
      img.c-test-img(:src='imgPaths.test4')
      img.c-test-img(:src='imgPaths.test5')

  .element-container.c-website
    h3.element-container__title Design outcome - Unashamed website

    .element-container__para.c-website-img-container
      img.c-website-img(:src='imgPaths.web1')
      img.c-website-img(:src='imgPaths.web2')
      img.c-website-img(:src='imgPaths.web3')
      img.c-website-img(:src='imgPaths.web4')
      img.c-website-img(:src='imgPaths.web5')
      img.c-website-img(:src='imgPaths.web6')
      img.c-website-img(:src='imgPaths.web7')
      img.c-website-img(:src='imgPaths.web8')
        
  .element-container.c-quiz
    h3.element-container__title Design outcome - Online quiz
  
    .element-container__para.c-quiz-img-container
      img.c-quiz-img(:src='imgPaths.quiz1')
      img.c-quiz-img(:src='imgPaths.quiz2')
      img.c-quiz-img(:src='imgPaths.quiz3')
      img.c-quiz-img(:src='imgPaths.quiz4')
      img.c-quiz-img(:src='imgPaths.quiz5')
      img.c-quiz-img(:src='imgPaths.quiz6')
      img.c-quiz-img(:src='imgPaths.quiz7')
      img.c-quiz-img(:src='imgPaths.quiz8')
</template>

<script>
import PageTemplate from '../PageTemplate.vue'
import PageBrief from '../PageBrief.vue'
import Arrow from '@components/Arrow.vue'

export default {
  name: 'First',
  components: {
    PageTemplate,
    PageBrief,
    Arrow
  },
  computed: {
    imgPaths () {
      const path = fileName => require('@/assets/images/01/' + fileName)
      
      return {
        topMain: require('@/assets/images/pageMain/01.png'),
        briefTopImage: path('brief-image.png'),
        graph: path('graph.png'),
        logo1: path('advocates_for_youth_logo.png'),
        logo2: path('sex_ed_logo.png'),
        logo3: path('ry_logo.png'),
        logo4: path('sex_etc_logo.jpg'),
        des: path('des.png'),
        test1: path('tester_01.jpg'),
        test2: path('tester_02.jpg'),
        test3: path('tester_03.png'),
        test4: path('tester_04.png'),
        test5: path('tester_05.jpg'),
        web1: path('web_01.png'),
        web2: path('web_02.png'),
        web3: path('web_03.png'),
        web4: path('web_04.png'),
        web5: path('web_05.png'),
        web6: path('web_06.png'),
        web7: path('web_07.png'),
        web8: path('web_08.png'),
        quiz1: path('quiz_01.jpg'),
        quiz2: path('quiz_02.jpg'),
        quiz3: path('quiz_03.jpg'),
        quiz4: path('quiz_04.jpg'),
        quiz5: path('quiz_05.jpg'),
        quiz6: path('quiz_06.jpg'),
        quiz7: path('quiz_07.jpg')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-prototype {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 3rem;
  margin-bottom: 7rem;

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

.c-graph-image {
  margin-right: 4rem;
}

.c-logo-list {
  display: flex;
  align-items: flex-start;

  .c-logo {
    display: inline-block;
    height: 8rem;
    margin-right: 2rem;

    &:last-child {
      margin-right: 0;
    }
  }
}

.c-solution-img-container {
  position: relative;
  display: block;
  width: 45rem;
  height: 30rem;
  margin-right: 3rem;
  
  img {
    position: absolute;
    display: block;

    &:first-child {
      width: 32rem;
      height: 23rem;
      right: 0;
      top: 0;
    }
    &:last-child {
      width: 28rem;
      height: 18rem;
      left: 0;
      bottom: 0;
    }
  }
}

.c-bullet-list-item {
  position: relative;
  margin-bottom: 2rem;
  max-width: 42rem;
  padding-left: 3rem;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: $text-red;
    top: 0.5rem;
    left: 1rem;
  }
}

.c-test {
  padding-bottom: 6rem;
}

.element-container__para.c-test-img-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .c-test-img {
    display: inline-block;
    width: 28rem;
    height: 18rem;
    margin-right: 1.2rem;
    margin-bottom: 1.2rem;
  }
}

.element-container__para.c-website-img-container,
.element-container__para.c-quiz-img-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  .c-website-img,
  .c-quiz-img, {
    display: inline-block;
    width: 22rem;
    height: auto;
    margin-right: 1.2rem;
    margin-bottom: 1.2rem;
    float: left;
  }
}

</style>