import { todoItemTypes } from "./types";

export const TodoItemInitialState: todoItemTypes = [{
    id: 1,
    text: 'Dummy text',
    completed: false
}]

export const InputValueInitialState = {
    text: ''
}




export type pomodoroInitialStateTypes = {
    pomodoroStore : {
        time : number, 
        presets : {
            pomodoro: number ,
            longBreak: number ,
            shortBreak: number 
        },
        todoItems : [
            {
                id: number ,
                title : string ,
                listItem : string[],
                text: string
            },
            
        ]
    }
}


export const pomodoroInitialState:pomodoroInitialStateTypes = {
    pomodoroStore : {
        time: 25 ,
        presets : {
            pomodoro : 25,
            longBreak : 10 ,
            shortBreak : 5
        },
        todoItems : [
            {
                id : 1 ,
                title: 'learn react',
                listItem : ['react redux' , 'useDispatch' , 'useSelectors'],
                text: 'sample item three'
            }
        ]
    }
}