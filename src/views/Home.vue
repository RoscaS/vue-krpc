<template>
  <div class="home">
    <Header></Header>
    <PlayGround></PlayGround>
    <!--<Footer></Footer>-->
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../sections/Footer'
import PlayGround from '../sections/PlayGround'
import Settings from '../settings'

export default {
  name: 'home',
  components: {PlayGround, Footer, Header},
}
</script>
