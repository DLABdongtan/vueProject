<template>
  <div id="app">
    <!-- 자식 컴포넌트에 props로 데이터를 전달 -->
    <GreetingCard name="Alice" message="Welcome to Vue.js!" />
  </div>
</template>

<script>
import GreetingCard from './components/GreetingCard.vue';

export default {
  components: {
    GreetingCard
  }
};
</script>