import React, { useEffect, useState } from 'react'
import { activateNotes , activateChecklist, activateShowTodo, addPomodoroTodo, addPomodoroCheckList, addPomodoroChecklistItem, addItemsSample, removePomodoroChecklistItem } from '../ducks/actions'
import { connect, useDispatch } from 'react-redux'
import { store } from '../ducks/store'
import * as style from './styles'
import * as actions from '../ducks/actions'
import {Button}from './styles'

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
        dispatch(activateShowTodo(false))
    }  


    const handleCheckListSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
        
       
        e.preventDefault()
        if(!checklistTitle?.value.trim() && !checklistContent?.value.trim()){
            return
        }else {
            dispatch(addPomodoroCheckList({title: checklistTitle?.value , checklist:checklistContent?.value }))
            checklistFormReference?.reset()
        }
        dispatch(activateShowTodo(false))
    }


    const items: string[] = []
    const text : string =''
    const title: string = ''
    const [todoitem , setTodoItem] = useState({
        items,
        text,
        title
    })

    const dispatchState = useDispatch()
    
    const addItems = () => {  
        setTodoItem({...todoitem , items : [...todoitem.items ,todoitem.text]})
    }


    const handleSubmit = () => {
        dispatchState(actions.addChecklistItem({title: todoitem.title , listItem: todoitem.items , text: todoitem.text}))
        setTodoItem({...todoitem , items : items , text : todoitem.text , title : todoitem.title})
        console.log(store.getState())
    }


    return (
        <>
            
            <div style={{background: '#83B8ff' , padding: '0 10px'}}>
               
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
                        <>
                        <ul style={{padding: '20px 0'}}>
                            <li><input placeholder='title'  onChange={(e) => setTodoItem({...todoitem , title : e.target.value })} required/></li>
                            <li><input placeholder='item' onChange={(e) => setTodoItem({...todoitem , text : e.target.value})} required/></li>
                            <br/>
                            <button onClick={addItems}>Add Item</button>
                            <button onClick={handleSubmit}>submit</button>
                         </ul>

                         {todoitem.items.map((item , index) => (
                                <ul style={{color : '#fff'}} key={index}>
                                    <li><input type='checkbox'/>{item}</li>
                                </ul>
                            ))}
                         </>
                        }
                    </div>
                }

            </div>
            
            <p><Button onClick={showAddToDo} >Add To Do</Button></p>
            
        </>
    )
}

export default connect()(PomodoroMainContainer)