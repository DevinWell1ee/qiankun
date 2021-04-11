<template>
  <div class="home">
    hello vue,

    <button @click="changeName">changeName</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// @ is an alias to /src

export default {
  name: 'Home',

  computed: {
    ...mapState('global', ['name'])
  },

  created () {
    console.log(this.name)
  },

  methods: {
    ...mapActions('global', ['setGlobalState']),

    changeName () {
      this.setGlobalState({
        name: 'hello welllee!!!'
      })
    }
  }
}
</script>
