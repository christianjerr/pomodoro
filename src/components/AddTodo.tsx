import React from 'react'
import {connect} from 'react-redux'
import { addItems } from '../ducks/actions';
import { AddTodoType } from '../ducks/types';

const AddTodo: React.FC<AddTodoType> = ({dispatch}) => {
    
    let inputValueRef: HTMLInputElement | null;
    
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if(!inputValueRef?.value.trim()){
            return
        }else{
            dispatch(addItems(inputValueRef.value))
            inputValueRef.value = ''
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type='string' ref={element => {inputValueRef = element}} required/>
            <p><button type='submit'>Add</button></p>
        </form>
    )
}

export default connect()(AddTodo)