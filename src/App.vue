<script>

import { store } from '../src/store.js'
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: { AppHeader },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <AppHeader></AppHeader>
</template>

<style></style>