<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <Brand></Brand>
        </a>
        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <!--<div class="navbar-menu">-->
        <!--<div class="navbar-end">-->

          <!--<a v-for="i in menu"-->
             <!--class="navbar-item"-->
             <!--:class="{'is-active': i.active}"-->
             <!--@click="setActive(i)">-->

            <!--<i class="icon fa-fw fal" :class="i.icon"></i>-->
            <!--<span>{{ i.name }}</span>-->
          <!--</a>-->

          <!--<span class="navbar-item">-->
            <!--<a class="button is-primary is-inverted">-->
              <!--<i class="icon fal fa-pen-alt"></i>-->
              <!--<span>Contact</span>-->
            <!--</a>-->
          <!--</span>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </nav>
</template>

<script>
  import Brand from './Brand'

  export default {
    name: 'Navbar',
    components: {Brand},
    data: () => ({
      menu: [
        {active: true, name: 'Home', icon: 'fa-home'},
        {active: false, name: 'Search', icon: 'fa-search'},
        {active: false, name: 'About', icon: 'fa-info'},
      ],
    }),
    methods: {
      setActive(clicked) {
        this.menu.forEach(i => i.active = false);
        clicked.active = true;
      }
    }
  }
</script>

<style scoped>

</style>
