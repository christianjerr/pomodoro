import { pomodoroTodoPayloadType } from "./types"

// depracated 
let randomNumber = Math.floor(Math.random() * 1000)

// depracated 
export const addItems = (text: string) => ({
    type: 'ADD_ITEM',
    id: randomNumber++,
    text: text,
    completed: false
})

// depracated 
export const deleteItems = (id: number) => ({
    type: 'DELETE_ITEM',
    id: id
})

// depracated 
export const completeItems = (id: number) => ({
    type: 'COMPLETE_ITEM',
    id: id
})

// depracated 
export const updateTask = (id: number) => ({
    type: 'UPDATE_TASK',
    id : id
})

// depracated 
export const updateItems = (text: string) => ({
    type: 'UPDATE_ITEM',
    text : text
})




export const activateNotes = (payload: boolean) => ({
    type : 'ACTIVATE_NOTE' ,
    payload: payload
})

export const activateChecklist = (payload: boolean) => ({
    type : 'ACTIVATE_CHECKLIST' ,
    payload: payload
})

export const activateShowTodo = (payload: boolean) => ({
    type : 'ACTIVE_ADDTODO' ,
    payload: payload
})




export const addPomodoroTodo = (payload : any) => ({
    type : 'ADD_POMODORO_TODO' ,
    id :  randomNumber++,
    title : payload.title , 
    noteValue: payload.noteValue
})

export const addPomodoroCheckList = (payload: any) => ({
    type : 'ADD_POMODORO_CHECKLIST' ,
    id: randomNumber++,
    title: payload.title,
    checklist: payload.checklist
})