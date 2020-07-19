<template lang='pug'>
  page-template(
    :pageNumber='3'
  )
    | page 3 content bla bla ...
  </template>
  
  <script>
  import PageTemplate from '../PageTemplate.vue'
  
  export default {
    name: 'Third',
    components: {
      PageTemplate
    }
  }
  </script>
  
  <style lang='scss' scoped>
  @import "../../../assets/styles/_variables.scss";
  
  </style>