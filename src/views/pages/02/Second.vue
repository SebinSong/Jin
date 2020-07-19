<template lang='pug'>
page-template(
  :pageNumber='2'
)
  | page 2 content bla bla ...
</template>

<script>
import PageTemplate from '../PageTemplate.vue'

export default {
  name: 'Second',
  components: {
    PageTemplate
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

</style>