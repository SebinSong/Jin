<template lang='pug'>
.c-home
  background-animation

  .c-section
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

    section-indicator.c-section-indicator

    main-title.c-main-title

    scroll-indicator.c-scroll-indicator

    string-typer.c-string-typer(
      string="Hi, I'm Jin"
    )

    text-cloud.c-welcome-cloud

  .c-section hey

  timeline.c-timeline
</template>

<script>
import BackgroundAnimation from '@components/home-bg-animation/HomeBgAnimation.vue'
import HamburgerIcon from '@components/hamburgerIcon.vue'
import SectionIndicator from '@components/sectionIndicator.vue'
import ScrollIndicator from '@components/ScrollIndicator.vue'
import StringTyper from '@components/stringTyper.vue'
import MainTitle from './HomeMainTitle.vue'
import TextCloud from './TextCloud.vue'
import Timeline from './Timeline.vue'


export default {
  name: 'Home',
  components: {
    BackgroundAnimation,
    HamburgerIcon,
    SectionIndicator,
    ScrollIndicator,
    StringTyper,
    MainTitle,
    TextCloud,
    Timeline
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

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
}

.c-timeline {
  left: 43rem;
  top: 53rem;
}

.c-header {
  position: absolute;
  top: 50%;
  right: 8rem;
  transform: translateY(-50%);
  font-size: $size-body-sm;
  font-weight: 700;
  letter-spacing: 0.5px;
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
  position: absolute;
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

.c-string-typer {
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
  letter-spacing: 0.5px;
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
</style>