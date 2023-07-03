import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
//import defaultBoard from './default-board'

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0
    }),
    actions: {
        addTodo(item) {
            this.todoList.push({ item, id: this.id++, completed: false} )
        }

    }
})