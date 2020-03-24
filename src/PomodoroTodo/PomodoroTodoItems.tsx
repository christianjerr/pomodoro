import React from 'react'
import { deconstructedItems } from '../ducks/types'
// import { pomodoIndividualItemTypes, pomodoroTodoPayloadType } from '../ducks/types'
import * as style from './styles'


const PomodoroTodoItems: React.FC<deconstructedItems> = ({pomodoroTodo}) => {
    
    return (
        <div >
            <h1>YOUR TO-DO LIST</h1>
            
                {
                    pomodoroTodo?.map(item => (
                        <style.TodoItemContainer key={item.id} marginBottom='10px'>
                            <li>{`Title: ${item.title}`}</li>
                            <li>{`Notes: ${item.noteValue}`}</li>
                            <li><button>Start Timer</button></li>
                            <li><button>Edit Timer</button></li>
                            <li><button>Delete Timer</button></li>
                        </style.TodoItemContainer> 
                    ))
                }
           
        </div>
    )
}

export default PomodoroTodoItems