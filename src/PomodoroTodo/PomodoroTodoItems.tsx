import React from 'react'
import { deconstructedItems } from '../ducks/types'
// import { pomodoIndividualItemTypes, pomodoroTodoPayloadType } from '../ducks/types'
import * as style from './styles'


const PomodoroTodoItems: React.FC<deconstructedItems> = ({pomodoroTodo , pomodoroChecklist , pomodoroChecklistItems }) => {
    
   
    return (
        <div style={{marginBottom : '50px'}}>
           
                {
                    pomodoroTodo?.map(item => (
                        <>
                        
                        
                        <style.TodoItemContainer key={item.id} marginBottom='10px'>
                            <li>{`Title: ${item.title}`}</li>
                            <li>{`Notes: ${item.noteValue}`}</li>
                            <style.BtnContainer marginTop='20px'>
                                <li><button>Start Timer</button></li>
                                <li><button>Edit Timer</button></li>
                                <li><button>Delete Timer</button></li>
                            </style.BtnContainer>
                        </style.TodoItemContainer> 
                        </>
                    ))
                }
                
                {pomodoroChecklist?.map(item => (
                    <>
                    
                    <style.TodoItemContainer marginBottom='10px'>
                    
                    <ul>
                        <li>Title: {item.title}</li>
                        { item.checklist &&
                            <li><input type='checkbox'/> {`${item.checklist}`}</li>
                            
                        }
                        
                    </ul>
                    {pomodoroChecklistItems?.map(item=> (
                        <>
                            <li><input type='checkbox'/>{item.checklistItem}</li>
                        </>
                    ))}
                    <style.BtnContainer marginTop='20px'>
                                <li><button>Start Timer</button></li>
                                <li><button>Edit Timer</button></li>
                                <li><button>Delete Timer</button></li>
                            </style.BtnContainer>
                    </style.TodoItemContainer>
                    </>
                ))}
                {
                    
                }

        </div>
    )
}

export default PomodoroTodoItems