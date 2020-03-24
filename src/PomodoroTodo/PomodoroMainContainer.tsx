import React, { useEffect } from 'react'
import { activateNotes , activateChecklist, activateShowTodo, addPomodoroTodo, addPomodoroCheckList } from '../ducks/actions'
import { connect } from 'react-redux'
import { store } from '../ducks/store'
import * as style from './styles'
type PomodoroMainType = {
    notes: boolean | undefined,
    checklist: boolean | undefined , 
    dispatch: any , 
    showTodo : boolean | undefined
}

const PomodoroMainContainer: React.FC<PomodoroMainType> = ({notes , checklist , dispatch , showTodo}) => {
    
    let noteTitle: HTMLInputElement | null ;
    let noteValue: HTMLTextAreaElement | null
    let noteformReference: HTMLFormElement | null;

    let checklistTitle : HTMLInputElement | null ;
    let checklistContent : HTMLInputElement | null ;
    let checklistFormReference: HTMLFormElement | null;


    const handleNotesClick = () => {
        dispatch(activateChecklist(false))
        dispatch(activateNotes(true))
    }

    const handleChecklistClick = () => {
        dispatch(activateChecklist(true))
        dispatch(activateNotes(false))
    }

    const showAddToDo = () => { 
        dispatch(activateShowTodo(true))
    }

    const handleCloseTodos = () => {
        dispatch(activateShowTodo(false))
    }

   

    const handleNoteValue = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!noteTitle?.value.trim() && !noteValue?.value.trim()){
            return
        }else {
            dispatch(addPomodoroTodo({title: noteTitle?.value , noteValue: noteValue?.value }))
            noteformReference?.reset()
        }
        console.log(store.getState())
    }  


    const handleCheckListSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!checklistTitle?.value.trim() && !checklistContent?.value.trim()){
            return
        }else {
            dispatch(addPomodoroCheckList({title: checklistTitle?.value , checklist : checklistContent?.value}))
            checklistFormReference?.reset()
            console.log(store.getState())
        }
    }

    return (
        <>
            <div style={{background: '#ccc' , padding: '0 10px'}}>
               
                {
                    showTodo && 
                    
                    <div>
                        <p><button onClick={handleCloseTodos}>Close</button></p>
                        <style.Margin marginBottom='40px'>
                            <style.BtnContainer>
                                <li><button onClick={handleNotesClick}>Notes</button></li>
                                <li><button onClick={handleChecklistClick}>Checklist</button></li>
                            </style.BtnContainer>
                        </style.Margin>
                        {notes  ? 
                        
                        <form onSubmit={(e) => handleNoteValue(e)} ref={element => {noteformReference = element}}>
                            <input placeholder='title' ref={element => {noteTitle = element}}/><br/>
                            <textarea placeholder='Notes' ref={element => {noteValue = element}}/>
                            <p><button type='submit'>Save</button></p>
                        </form>
                        
                        : checklist  &&
                        
                        <form onSubmit={(e) => handleCheckListSubmit(e)} ref={element => {checklistFormReference = element}}>
                            <input placeholder='Title' ref={element => {checklistTitle = element}}/>
                            <input placeholder='Check List item' ref = {element => {checklistContent = element}}/>
                            <span><button>Add Item</button></span>
                            <p><button type='submit'>Save</button></p>
                        </form>
                        }
                    </div>
                }

            </div>
            
           
            <p><button onClick={showAddToDo} >Add To Do</button></p>
            
        </>
    )
}

export default connect()(PomodoroMainContainer)