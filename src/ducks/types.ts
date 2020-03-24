export type todoItemTypes =[ {
    id: number,
    text: string,
    completed: boolean
}]

export type InputValueInitialState = {
    text: string;
}

export type deconstructedItems = {
    todos : [{
        id: number,
        text: string,
        completed: boolean,
    }],
    dispatch?: any,
    notes?: boolean | undefined,
    checklist?: boolean | undefined
    showTodo?: boolean | undefined
    pomodoroTodo?: pomodoroTodoPayloadType
}

export type pomodoroTodoPayloadType = {
    id?: number , 
    title : string | undefined , 
    noteValue : string | undefined
}

export type pomodoIndividualItemTypes = {
    pomodoroTodo?:{id?: number , 
    title : string | undefined , 
    noteValue : string | undefined
}}


export type AddTodoType = {
    dispatch: any;
}
export type actionTypes = {
    type: string,
    id: number,
    text: string,
    completed: boolean
}