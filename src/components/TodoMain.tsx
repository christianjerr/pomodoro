import React from 'react'
import {connect} from 'react-redux'
import * as types from '../ducks/types'
import { deleteItems , completeItems , updateTask } from '../ducks/actions'

const TodoMain:React.FC<types.deconstructedItems> = ({todos,dispatch}) => {

    const handleDelete = (id:number) => {
        dispatch(deleteItems(id))
    }

    const handleCompleted = (id: number) => {
        dispatch(completeItems(id))
    }

    const handleUpdate = (id: number ) => {
        dispatch(updateTask(id))
    }

    return (
        <>
                {todos.map((i) => (
                    <ul key={i.id}>
                        <li><span style={{color: i.completed ? 'green' : 'red'}}>{i.text}</span></li>
                        <li>
                            <button onClick={() => handleDelete(i.id)}>Delete</button>
                            <button onClick={() => handleCompleted(i.id)}>Complete</button>
                            <button onClick={() => handleUpdate(i.id)}>update item</button>
                        </li>  
                    </ul>
                ))}
        </>
    )
}



export default connect()(TodoMain)