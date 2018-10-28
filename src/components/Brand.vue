<template>
  <div>
    <h1 class="title">
      Vue<span>kRPC</span>
    </h1>
  </div>
</template>

<script>
  import settings from '../settings'

  export default {
    name: 'Brand',
    data: () => ({
      title: settings.title,
    }),
  }
</script>

<style lang="scss" scoped>
  .title {
    color: #7957D5;
    & :first-child {
      border-radius: 5px;
      background-color: white;
      color: #7957D5;
    }

    h1 {
      cursor: pointer;
      font-size: 27px;
    }
  }
</style>
