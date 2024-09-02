<template>
  <div id="app">
    <h1>Vue.js Directive Practice</h1>

    <!-- v-bind 연습 -->
    <h2 v-bind:style="{ color: textColor }">This is a dynamic color text</h2>
    <input v-model="textColor" placeholder="Enter a color" />

    <!-- v-model 연습 -->
    <h2>Enter your name:</h2>
    <input v-model="name" placeholder="Your name" />
    <p>Hello, {{ name }}!</p>

    <!-- v-if 연습 -->
    <h2 v-if="isVisible">This text is conditionally rendered</h2>
    <button @click="toggleVisibility">Toggle Visibility</button>

    <!-- v-for 연습 -->
    <h2>Fruit List:</h2>
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">{{ fruit }}</li>
    </ul>
    <input v-model="newFruit" placeholder="Add a new fruit" />
    <button @click="addFruit">Add Fruit</button>

    <!-- v-on 연습 -->
    <h2>Button Click Event</h2>
    <button @click="showAlert">Click me</button>

    <!-- v-show 연습 -->
    <h2 v-show="showMessage">This message is shown or hidden based on v-show</h2>
    <button @click="toggleMessage">Toggle Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textColor: 'blue',
      name: '',
      isVisible: true,
      fruits: ['Apple', 'Banana', 'Orange'],
      newFruit: '',
      showMessage: true,
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    addFruit() {
      if (this.newFruit.trim() !== '') {
        this.fruits.push(this.newFruit);
        this.newFruit = '';
      }
    },
    showAlert() {
      alert('Button clicked!');
    },
    toggleMessage() {
      this.showMessage = !this.showMessage;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>