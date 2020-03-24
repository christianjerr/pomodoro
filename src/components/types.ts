import { pomodoroTodoPayloadType } from "../ducks/types"

export type timersType = {
    pomodoro: any ,
    pomodoroStatus: boolean,
    shortBreak: number , 
    shortBreakStatus: boolean,
    longBreak: number , 
    LongBrekStatus: boolean,
    loop: number
    LoopStatus: boolean
}

type todoItemType = [{
    id: number,
    text: string,
    completed: boolean
}]


export type StateAll = {
    todos : todoItemType,
    notes: boolean ,
    checklist: boolean , 
    showTodo : boolean , 
    pomodoroTodo: pomodoroTodoPayloadType
}

