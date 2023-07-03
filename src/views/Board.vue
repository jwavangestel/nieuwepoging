<template>
    <div class="board">
      <form @submit.prevent="addItemAndClear(todo)">

        <input v-model="todo" type="text" />
        <button>Add</button>
      </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '@/stores/todoList'
 
const todo = ref('')

const store = useTodoListStore()

function addItemAndClear(item) {
  if (item.lenght === 0) {
    return
  }
  store.addTodo(item)
  todo.value = ''
}
      
</script>

<style scoped>

.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 bg-white text-grey-darkest no-underline;
}

.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow ;
  min-width: 350px;
}
.board {
  @apply p-4 bg-teal-dark h-full overflow-auto;
}

.task-bg {
  @apply absolute;
  background: rgba(0,0,0,0.5);
}

</style>
