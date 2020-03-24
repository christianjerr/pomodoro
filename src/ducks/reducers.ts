import {combineReducers} from 'redux'
import { TodoItemInitialState } from './models'

// depracated 
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

const pomodoroTodo = (state=[] , action: any) => {
    switch(action.type){
        case 'ADD_POMODORO_TODO' : 
            return [...state , {
                id: action.id,
                title : action.title , 
                noteValue: action.noteValue
            }]
        default :  
            return state
    }
}

export const allReducer = combineReducers({
    
    // depracated 
    todos , 


    notes ,
    checklist,
    showTodo , 
    pomodoroTodo
})