import { pomodoroTodoPayloadType } from "./types"
import * as types from './types'

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

export const addPomodoroChecklistItem = (payload:any) => ({
    type : 'ADD_POMODORO_CHECKLIST_ITEMS' ,
    id: randomNumber++ ,
    checklistItem: payload.checklistItem
})
export const removePomodoroChecklistItem = () => ({
    type : 'SPREADING_POMODORO_ITEMS' 
})
export const addItemsSample = (payload:any) => ({
    type : 'ADD_POMODORO_ITEMS' ,
    id: randomNumber++ ,
    checklist: payload.checklist,
    title: payload.title
})

export const addPomodoroCheckList = (payload: any) => ({
    type : 'ADD_POMODORO_CHECKLIST' ,
    id: randomNumber++,
    title: payload.title,
    checklist: payload.checklist
})


export const deletePomodoroChecklist = (payload: any) => ({
    type: 'DELETE_POMODORO_CHECKLIST',
    id: payload
})

export const deletePomodoroNotes = (payload: number | undefined) => ({
    type: 'DELETE_POMODORO_TODO' ,
    id : payload
})


type checklistItemPayloadType = {
    title : string ,
    listItem: string[],
    text: string
}
export const addChecklistItem  = (payload : checklistItemPayloadType) => ({
    type : types.ADD_CHECKLIST_ITEM , 
    title : payload.title ,
    listItem : payload.listItem,
    text: payload.text
})

export const deleteChecklistItem  = (payload : number) => ({
    type : types.DELETE_CHECKLIST_ITEM , 
    id : payload
})