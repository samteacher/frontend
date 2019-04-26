<template>
  <div id="app">
    <router-view/>
    <navRouter></navRouter>
    <!--<cityRouter></cityRouter>-->
  </div>
</template>

<script>
  import Nav from '@/components/Nav';
  // import City from '@/components/City';

  export default {
    name: 'App',
    components: {
      // Nav
      navRouter: Nav,
      // cityRouter: City
    }
  }
</script>
