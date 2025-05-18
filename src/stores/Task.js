import { GetTasks } from "@/script/LocalDB"
import { defineStore } from "pinia"

export const useTodoStore = defineStore('todo', {
    state: () => ({
        
        TaskList: GetTasks(),

        ShowInputBox: false,   

    }),

    actions: {
    },
  })