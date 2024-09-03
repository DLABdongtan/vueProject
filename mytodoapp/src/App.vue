<template>
  <div id="app">
    <h1>My To Do List</h1>    <!-- 어플리케이션 제목 -->
    
    <!-- 새로운 작업목록을 추가하는 입력 필드 -->
     <!-- v-model을 사용해서 입력필드와 - Vue 사이에 양방향 바인딩 설정 -->
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="할 일을 기록하세요.">
    <!-- click디렉티브를 사용해서 버튼을 클릭하면 addTodo()함수 호출 -->
    <button @click="addTodo"> Add </button>

    <!-- todo list를 화면에 렌더링 -->
     <!-- v-for 디렉티브를 사용해서 todos배열을 순회하며 목록을 표시함 -->
    <ul>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </ul>
  </div>
</template>

<script>
//TodoItem 가져오기 
  import TodoItem from './components/TodoItem.vue';

  export default {
    components: {
      TodoItem
    },
    data() {
      return {
        newTodo: '',
        todos: []
      };
    },
    methods: {
      addTodo() {
        if(this.newTodo.trim !== '') {
          this.todos.push({ id: Date.now(), text: this.newTodo });
          this.newTodo = '';      //입력하고 나서, 필드 초기화 
        }
      }
    }
  };
</script>

<style>
/* */
</style>