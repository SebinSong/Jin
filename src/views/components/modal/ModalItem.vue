<template lang='pug'>
.c-modal-item
  h3.c-number {{ item.number }}
  .c-description
    h5.c-name {{ item.title }}
    .c-role {{ item.role }}
  img.c-image(:src="item.imagePath")
  .c-date {{ item.date }}
</template>

<script>
export default {
  name: 'ModalItem',
  props: {
    itemInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    item () {
      return Object.assign(
        {},
        this.itemInfo,
        {
          imagePath: require(
            '@/assets/images/main/' +
            this.itemInfo.imageName +
            '.jpg'
          )
        }
      )
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

$modal-border-color: #E8E1E1;

.c-modal-item {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-right: 1px solid $modal-border-color;
  overflow: hidden;
  padding-top: 15rem;
  text-align: right;
  cursor: pointer;

  &:hover {
    background-color: rgba(0,0,0,0.035);
  }
}

.c-number {
  font: {
    size: 10rem;
    weight: 700;
  }
  color: $text-red;
  margin-bottom: 8rem;
}

.c-description {
  position: relative;
  margin-bottom: 2rem;
  padding-top: 2rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: 2.4rem;
    height: 1px;
    background-color: $text-grey-dark;
  }
  .c-name {
    color: text-black;
    font: {
      weight: 700;
      size: 2.2rem;
    }
  }
  .c-role {
    font-size: 1.5rem;
  }
}

.c-image {
  display: inline-block;
  max-width: 21rem;
  max-height: 14rem;
  margin-bottom: 2rem;
}

.c-date {
  font-size: 1.5rem;
}

</style>