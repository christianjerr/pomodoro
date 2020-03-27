export type todoItemTypes = [{
    id: number,
    text: string,
    completed: boolean
}]

export type InputValueInitialState = {
    text: string;
}

export type deconstructedItems = {
    
    todos?: [{
        id: number,
        text: string,
        completed: boolean,
    }],
    
    dispatch?: any,
    notes?: boolean | undefined,
    checklist?: boolean | undefined
    showTodo?: boolean | undefined
    
    pomodoroTodo?: [{
        id?: number , 
        title : string | undefined , 
        noteValue : string | undefined
    }]

    pomodoroChecklist?: [{
        id: number ,
        title: string ,
        checklist: any,
    }]

    pomodoroChecklistItems?: [{
        checklistItem: string
    }]

    handleStart? : Function
    handleStop? : Function
    handleReset? : Function
}

export type pomodoroTodoPayloadType = [{
    id?: number , 
    title : string | undefined , 
    noteValue : string | undefined
}]

export type pomodoroChecklistType = [{
    id: number ,
    title: string ,
    checklist: string,
}]

export type pomodoroCheckListItemType = [{
    checklistItem: string
}]

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

export const ADD_CHECKLIST_ITEM = 'ADD_CHECKLIST_ITEM'
export const DELETE_CHECKLIST_ITEM = 'DELETE_CHECKLIST_ITEM'