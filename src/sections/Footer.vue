<template>
  <section class="section hero is-primary is-small">
    <div class="level is-mobile">
      <div class="level-item" v-for="icon in icons">
        <a class="no-tr"
           target="_blank"
           :href="icon.url">
          <i class="grow fab" :class="icon.icon"></i>
        </a>
      </div>
    </div>

    <p>
      Copyright &copy; {{ getCopyright() }}
    </p>
    <p>
      Design & code:
      <a class="jrosk" href="mailto:jrosk.managment@gmail.com"
         title="With  by Sol">JrosK</a>
    </p>
  </section>
</template>

<script>
  import { DateTime } from 'luxon'
  import settings from '../settings'

  export default {
    name: 'Footer',
    components: {},
    data: () => ({}),
    computed: {
      icons () {
        return [
          {icon: 'fa-facebook', url: '#'},
          {icon: 'fa-tripadvisor', url: '#'},
          {icon: 'fa-google', url: '#'},
          {icon: 'fa-twitter', url: '#'},
          {icon: 'fa-instagram', url: '#'},
          {icon: 'fa-linkedin', url: '#'},
          {icon: 'fa-snapchat', url: '#'},
        ]
      },
    },

    methods: {
      getCopyright () {
        let date = DateTime.local()
        return `${date.year} ${settings.title}`
      },
    },
  }
</script>

<style scoped lang="scss">
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    ._btn {
      border-color: white;
      color: white;

      &:hover {
        color: black;
        background-color: white;
      }
    }
  }

  .level {
    margin-top: 30px;
    .level-item {
      a {
        color: white;

        i {
          transition: transform 0.2s ease;
          font-size: 30px;
          transform: scale(1);
          margin-left: 10px;
          margin-right: 10px;

          @media screen and (max-width: 430px) {
            margin-left: 2px;
            margin-right: 2px;
          }

          &:hover {
            transition: transform 0.2s ease;
            transform: scale(1.2);
          }
        }
      }
    }
  }

  p {
    color: white;
    font-size: 16px;
  }

  .jrosk {
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin-left: 5px;

    &:hover {
      color: white;
    }

    &:after {
      background: white;
    }
  }
</style>
