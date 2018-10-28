<template>
  <div class="wrapper">
    <h1 class="title">{{ title }}</h1>
    <div class="underline"></div>
  </div>
</template>

<script>
  export default {
    name: 'Title',
    props: {
      title: {type: String},
    },
  }
</script>

<style scoped lang="scss">

.wrapper {
  margin-bottom: 30px;
  .title {
    font-weight: bold;
    text-align: center;
  }

  .underline {
    opacity: 0.65;
    margin: -10px auto 0 auto;
    width: 100px;
    border-bottom: 2px solid #7957D5;
  }
}


</style>
