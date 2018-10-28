<template>
  <section class="hero is-primary is-medium">

    <div class="hero-head">
      <Navbar></Navbar>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h2>
      </div>
    </div>

  </section>
</template>

<script>
  import settings from '../settings'
  import Navbar from './Navbar'

  export default {
    name: 'Header',
    components: {Navbar},
    data: () => ({
      title: settings.title,
    }),
    props: {
      source: String,
    },
  }
</script>

<style lang="scss" scoped>


</style>
