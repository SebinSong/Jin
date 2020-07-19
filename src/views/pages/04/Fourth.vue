<template lang='pug'>
  page-template(
    :pageNumber='4'
  )
    | page 4 content bla bla ...
  </template>
  
  <script>
  import PageTemplate from '../PageTemplate.vue'
  
  export default {
    name: 'Fourth',
    components: {
      PageTemplate
    }
  }
  </script>
  
  <style lang='scss' scoped>
  @import "../../../assets/styles/_variables.scss";
  
  </style>