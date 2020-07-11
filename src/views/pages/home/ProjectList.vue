<template lang='pug'>
.c-project-list
  ul.c-list-container
    li.c-list-item
      svg.c-list-title(
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 240 50"
      )
        text.c-list-title--text(
          x="120"
          y="37"
        ) Project Name
    li.c-list-item(
      v-for="(item, index) in projects"
      :key="'project-' + index"
    )
      p.c-list-item--name.heading {{ item.projectName }}
      .c-list-item--description
        span.project-type(
          :class="{ 'commercial': item.isCommercial }"
        ) {{ item.isCommercial ? 'Commercial Project' : 'Personal Project' }}
        span.project-client(
          v-if="item.isCommercial"
        ) {{ item.client }}
</template>

<script>
export default {
  name: 'ProjectList',
  data () {
    return {
      projects: [
        { projectName: 'Art at heart', 
          isCommercial: true, 
          client: 'Auckland Art Gallery' },
        { projectName: 'Bognarson',
          isCommercial: true,
          client: 'Bognarson' },
        { projectName: 'Scanny',
          isCommercial: false },
        { projectName: 'Dream List',
          isCommercial: false },
        { projectName: 'Flip',
          isCommercial: false }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-project-list {
  padding-right: 8.5rem;
}

.c-list-container {
  position: relative;
  width: 100%;
  list-style: none;
}

.c-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid $text-grey-dark;
  cursor: pointer;

  &:first-child {
    cursor: auto;
    user-select: none;
  }

  &--name {
    font-size: 5rem;
  }

  &--description {
    display: flex;
    flex-direction: column;
    text-align: right;
    line-height: 1.5;
    font-size: $size-body-sm;

    .project-type {
      display: inline-block;
      font-weight: 700;
    }
    .project-type::before {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 1rem;
      background-color: $text-grey;
      margin-right: 0.5rem;
    }
    .project-type.commercial::before {
      background-color: $text-red;
    }
  }
}

.c-list-title {
  position: relative;
  width: 37rem;
  height: 7rem;

  &--text {
    text-anchor: middle;
    fill: none;
    stroke: $text-black {
      width: 1px;
    }
    font: {
      size: 4rem;
      weight: 700;
    }
  }
}

</style>