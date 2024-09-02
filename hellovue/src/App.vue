<!-- App.vue -->
<template>
  <h1>Hello world</h1>
  <div>
    <FirstComponent/>
  </div>
</template>

<script>
import FirstComponent from '@/components/FirstComponents.vue';
export default {
  name: 'App',
  components: {
    FirstComponent
  }
};
</script>
<style scoped>

</style>