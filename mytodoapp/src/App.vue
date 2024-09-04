<template>
  <div id="app">
    <h1>My To Do List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="할 일을 기록하세요.">
    <button @click="addTodo">Add</button>
    <ul>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle-complete="toggleComplete" />
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
import axios from 'axios';

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      newTodo: '',
      todos: [],
      userId: 1 // 현재 사용자의 ID (예시로 1로 설정)
    };
  },
  created() {
    this.getTodos();
  },
  methods: {
    async getTodos() {
      try {
        const response = await axios.get(`http://localhost:3000/todos?user_id=${this.userId}`);
        this.todos = response.data;
      } catch (error) {
        console.error('할 일 목록을 가져오는 중 오류 발생:', error);
      }
    },
    async addTodo() {
      if (this.newTodo.trim() !== '') {
        try {
          const response = await axios.post('http://localhost:3000/todos', { 
            text: this.newTodo, 
            user_id: this.userId 
          });
          this.todos.push(response.data);
          this.newTodo = '';
        } catch (error) {
          console.error('할 일을 추가하는 중 오류 발생:', error);
        }
      }
    },
    async toggleComplete(todoId) {
      const todo = this.todos.find(todo => todo.id === todoId);
      if (todo) {
        try {
          todo.completed = !todo.completed; // 상태를 토글
          console.log(`Completed 값: ${todo.completed}`); // 로그 추가
          
          // 서버로 PUT 요청 보내기
          await axios.put(`http://localhost:3000/todos/${todoId}`, { completed: todo.completed });
        } catch (error) {
          console.error('할 일 상태를 변경하는 중 오류 발생:', error); // 오류 출력
        }
      }
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}
h1 {
  color: #333;
}
</style>