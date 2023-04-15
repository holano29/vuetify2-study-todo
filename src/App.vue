<template>
  <v-app>
    <NavBar/>

    <v-main class="grey lighten-2" pa-4>
        <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
