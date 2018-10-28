<template>
  <section class="section">
    <Title v-if="title" :title="title"></Title>
    <div class="container">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
  import Title from '../components/Title'

  export default {
    name: 'SectionLayout',
    components: {Title},
    props: {
      title: {type: String},
    },
  }
</script>

<style lang="scss" scoped>


</style>
