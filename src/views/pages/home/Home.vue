<template lang='pug'>
.c-home
  background-animation

  .c-section#main
    .c-header
      .header-container.left
        a.link About
        span.header__line.left
        a.link Contact me
      .header-container.right
        span.header__line.right
        span.language
          span.language__item Korea
          span.language__item.active New Zealand
    
    .c-profession
      span.featureline
      span.profession-title UI Designer / Art Director

    hamburger-icon.c-menuicon

    main-title.c-main-title

    scroll-indicator.c-scroll-indicator

    string-typer.c-introduction(
      string="Hi, I'm Jin"
    )

    text-cloud.c-welcome-cloud

  .c-section#about
    vertical-red-text.c-red-text-about I am ..

  .c-section.gridify#work
    .p-left
      .c-deco-box--work

      mesh-background.c-mesh-background

      vertical-red-text.c-red-text-work Selected works
    .p-right
      project-list.c-project-list

  .c-section.gridify#contact
    .p-right
      .c-title-container
        h3.c-contact__title Contact
        string-typer.c-contact__comment(
          string="I'm excited to work with you and your company. :)"
        )

  timeline.c-timeline

  section-indicator.c-section-indicator
</template>

<script>
import BackgroundAnimation from '@components/home-bg-animation/HomeBgAnimation.vue'
import HamburgerIcon from '@components/hamburgerIcon.vue'
import SectionIndicator from '@components/sectionIndicator.vue'
import ScrollIndicator from '@components/ScrollIndicator.vue'
import StringTyper from '@components/stringTyper.vue'
import MeshBackground from '@components/MeshBackground.vue'
import MainTitle from './HomeMainTitle.vue'
import TextCloud from './TextCloud.vue'
import Timeline from './Timeline.vue'
import VerticalRedText from './VerticalRedText.vue'
import ProjectList from './ProjectList.vue'

export default {
  name: 'Home',
  components: {
    BackgroundAnimation,
    HamburgerIcon,
    SectionIndicator,
    ScrollIndicator,
    StringTyper,
    MeshBackground,
    MainTitle,
    TextCloud,
    Timeline,
    VerticalRedText,
    ProjectList
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";
$page-left-width: 33rem;

.c-home {
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

  &.gridify {
    display: grid;
    grid-template-columns: $page-left-width 1fr;
    grid-template-rows: 100%;
    grid-template-areas: "p-left p-right";

    > * {
      position: relative;
    }

    .p-left {
      grid-area: p-left;
    }
    .p-right {
      grid-area: p-right;
    }
  }
}

.c-section#work {
  padding-bottom: 5rem;
}

.c-timeline {
  left: 43rem;
  top: 66.25vh;
}

.c-header {
  position: absolute;
  top: 50%;
  right: 8rem;
  transform: translateY(-50%);
  font-size: $size-body-sm;
  font-weight: 700;
  writing-mode: vertical-rl;
  height: 55rem;
  overflow: hidden;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-container {
    padding: 0.25rem;
  }
  .header-container.right {
    display: flex;
    align-items: center;
  }
  .header-container > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  .header__line {
    display: inline-block;
    height: 4.6rem;
    background-color: $text-black;
    min-width: 0.1rem;
  }
  .header__line.left {
    height: 9.2rem;
  }

  .link {
    display: inline-block;
    text-decoration: underline;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .language {
    display: inline-flex;
    flex-direction: column;
  }

  .language__item {
    display: inline-block;
    line-height: 1.3;
    color: $text-grey;
    cursor: pointer;
  }
  .language__item.active {
    color: $text-black;
  }
  .language__item:hover {
    color: $text-black;
    text-decoration: underline;
  }
}

.c-menuicon {
  position: absolute;
  top: 5rem;
  left: 9rem;
}

.c-section-indicator {
  position: fixed;
  left: 9rem;
  bottom: 20rem;
}

.c-main-title {
  top: 22rem;
  left: 22rem;
}

.c-scroll-indicator {
  bottom : 6rem;
  left: 50%;
  transform: translateX(-50%);
}

.c-introduction {
  position: absolute;
  top: 19rem;
  left: 22rem;
}

.c-profession {
  position: absolute;
  top: 10rem;
  right: 30rem;
  font-size: $size-body-sm;
  font-weight: 700;
  display: flex;
  align-items: flex-start;

  .featureline {
    display: inline-block;
    height: 0.1rem;
    width: 4.6rem;
    margin-right: 2.4rem;
    margin-top: 0.5rem;
    background-color: $text-black;
  }
}

.c-welcome-cloud {
  top: 10rem;
  right: 55rem;
}

.c-red-text {
  &-about {
    bottom: 0.25rem;
    left: 24rem;
  }

  &-work {
    right: 0;
    bottom: 0;
    font-size: 8rem;
  }
}

.c-deco-box--work {
  position: absolute;
  right: 0;
  top: 7.5rem;
  min-width: 45%;
  min-height: 60%;
  background-color: darken(#F8F4F4, 2%);
}

.c-project-list {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

.c-section#contact {
  position: relative;
  background-color: $background-grey;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 66.7vh;
    width: 66.7vw;
    background-color: $background-white;
  }
}

.c-contact__title {
  font-size: 9rem;
}

.c-contact__comment {
  font-size: $size-body-md;
}
</style>