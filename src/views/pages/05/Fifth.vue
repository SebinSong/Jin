<template lang='pug'>
  page-template(
    :pageNumber='5'
  )
    | page 5 content bla bla ...
  </template>
  
  <script>
  import PageTemplate from '../PageTemplate.vue'
  
  export default {
    name: 'Fifth',
    components: {
      PageTemplate
    }
  }
  </script>
  
  <style lang='scss' scoped>
  @import "../../../assets/styles/_variables.scss";
  
  </style>