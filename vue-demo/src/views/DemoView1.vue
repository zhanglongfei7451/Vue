<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">Remove Todo</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'show all' : 'Hide Complete' }}
  </button>
</template>

<script setup>
import { computed, ref } from 'vue'
let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'html', done: true},
  { id: id++, text: 'js', done: true},
  { id: id++, text: 'css', done: true}
])

function removeTodo(todo){
  todos.value = todos.value.filter((t) => t !== todo)
}

function addTodo(){
  if(newTodo.value == '') return
  todos.value.push({ id: id++, text: newTodo.value, done: false})
  newTodo.value = ''
}

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

</script>
<style>
.done {
  text-decoration: line-through;
}
</style>
