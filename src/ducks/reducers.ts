import {combineReducers} from 'redux'
import { TodoItemInitialState } from './models'
import * as types from './types'
import { pomodoroInitialState } from './models'



type pomodorolistType = {
    id: number ,
    title : string ,
    checklist : string
}

const todos = (state = TodoItemInitialState , action: any) => {    
    switch(action.type){
        case 'ADD_ITEM' : 
            return [...state , {
                id: action.id,
                text: action.text,
                completed: action.completed
            }]
        case 'DELETE_ITEM' :
            return state.filter(i => i.id !== action.id)
        
        case 'COMPLETE_ITEM' :
            return state.map(item => {
                if(item.id === action.id) {
                    item.completed = !item.completed
                }
                return item
            })
        
        case 'UPDATE_TASK' : 
            return state.filter(i => i.id !== action.id)
        
        default : 
            return []
    }
}


const notes = (state = true , action : any) => {
    switch(action.type){
        case 'ACTIVATE_NOTE' : 
            return state = action.payload
        default :
            return state
    }
}

const checklist = (state = false , action: any) => {
    switch(action.type){
        case 'ACTIVATE_CHECKLIST' : 
            return state = action.payload
        default : 
            return state
    }
}

const showTodo = (state = false , action: any) => {
    switch(action.type) {
        case 'ACTIVE_ADDTODO' :
            return state = action.payload
        default : 
            return state
    }
}

const pomodoroTodo = (state= [] , action: any) => {
    switch(action.type){
        case 'ADD_POMODORO_TODO' : 
            return [...state , {
                id: action.id,
                title : action.title , 
                noteValue: action.noteValue
            }]
        case 'DELETE_POMODORO_TODO' : 
            return state.filter((i:pomodorolistType) => i.id !== action.id)
        default :  
            return state
    }
}


const pomodoroReducer = (state:any = pomodoroInitialState , action:any) => {
    switch(action.type){
        case types.ADD_CHECKLIST_ITEM : 
            state = {
                pomodoroStore: {
                ...state.pomodoroStore,
                todoItems: [
                    ...state.pomodoroStore.todoItems,
                    {
                    id: state.pomodoroStore.todoItems.length + 1,
                    title: action.title,
                    listItem: action.listItem,
                    text : action.text
                    }
                ]
                }
            };
            return state;
        case types.DELETE_CHECKLIST_ITEM : 
        return state = {
            pomodoroStore: {
                ...state.pomodoroStore,
                todoItems: [
                    ...state.pomodoroStore.todoItems.filter((i:any) => i.id !== action.id),
                   
                ]
                }
        }
            
        default : 
          return state
    }
}




const pomodoroChecklist = (state = [] , action : any) => {
    switch(action.type) {
        case 'ADD_POMODORO_CHECKLIST' : 
            return [...state , {
                id: action.id ,
                title: action.title,
                checklist: action.checklist,
            }]
        case 'DELETE_POMODORO_CHECKLIST' : 
            return state.filter((i:pomodorolistType) => i.id !== action.id)
        default : 
            return state
    }
}

export const allReducer = combineReducers({
    todos , 
    notes ,
    checklist,
    showTodo , 
    pomodoroTodo , 
    pomodoroChecklist,
    pomodoroReducer
})