import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import defaultBoard from '@/./default-board'

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        board
    })
})