import React from 'react'
import { deconstructedItems } from '../ducks/types'
// import { pomodoIndividualItemTypes, pomodoroTodoPayloadType } from '../ducks/types'
import * as style from './styles'
import { deletePomodoroNotes } from '../ducks/actions'
import { connect, useSelector  , useDispatch} from 'react-redux'
import * as action from '../ducks/actions'

const PomodoroTodoItems: React.FC<deconstructedItems> = ({
    pomodoroTodo, 
    pomodoroChecklist, 
    dispatch,  
    handleStart,
    handleStop,
    handleReset
    }) => {
    
    
   const data = useSelector((state:any) => state.pomodoroReducer)
    const dispatchState = useDispatch()


    const handleDeleteChecklist = (id:number) => {
        console.log(id)
        dispatchState(action.deleteChecklistItem(id))
        handleReset && handleReset()
    }
    
    const handlePomodoroDelete = (id: number | undefined) => {
        dispatch(deletePomodoroNotes(id))
        handleReset && handleReset()
    }

    const handleStartTimer = () => {
        handleStart && handleStart()
    }
    
    const handleStopTimer = () => {
        handleStop && handleStop()
    }
    console.log(data)
    return (
        <div style={{marginBottom : '50px'}}>
           
                {
                    pomodoroTodo?.map((item:any) => (
                        <>
                        <style.TodoItemContainer key={item.id} marginBottom='10px'>
                            <li>{`Title: ${item.title}`}</li>
                            <li>{`Notes: ${item.noteValue}`}</li>
                            <style.BtnContainer marginTop='20px'>
                                <li><button onClick={handleStartTimer}>Start Timer</button></li>
                                <li><button onClick={handleStopTimer}>Stop Timer</button></li>
                                <li><button onClick={() => handlePomodoroDelete(item.id)}>Delete Timer</button></li>
                            </style.BtnContainer>
                        </style.TodoItemContainer> 
                        </>
                    ))
                }
                
                {pomodoroChecklist?.map((item:any , index:any) => (
                    <>
                    <style.TodoItemContainer marginBottom='10px'>
                    <ul key={index}>
                        <li>Title: {item.title}</li>
                        { item.checklist &&
                            <li><input type='checkbox'/> {`${item.checklist}`}</li>
                            
                        }
                        
                    </ul>
                    <style.BtnContainer marginTop='20px'>
                                <li><button onClick={handleStartTimer}>Start Timer</button></li>
                                <li><button onClick={handleStopTimer}>Stop Timer</button></li>
                                <li><button onClick={() => handleDeleteChecklist(item.id)}>Delete Timer</button></li>
                            </style.BtnContainer>
                    </style.TodoItemContainer>
                    </>
                ))}
                
                <ul style={{color: '#fff' , background: '#83B8ff' , padding : '0 10px 0 10px' }}>
                    
                {   data.pomodoroStore.todoItems.map((item:any, index:any) => (
                    item.id === 1 ? '' : <>
                    <ul style={{margin: '10px'}} key={index}>
                        <hr/>
                        <h1>{item.title}</h1>
                        {
                            item.listItem.length < 1 
                            ?   <li><input type='checkbox'/>{item.text}</li>
                            :   item.listItem.map((i:any, index:any) => (
                                <li key={index}><input type='checkbox'/>{i}</li>
                                  
                                
                                ))            
                        }
                    </ul>
                     <style.BtnContainer marginTop='20px'>
                        <li><button onClick={handleStartTimer}>Start Timer</button></li>
                        <li><button onClick={handleStopTimer}>Stop Timer</button></li>
                        <li><button onClick={() => handleDeleteChecklist(item.id)}>Delete Timer</button></li>
                    </style.BtnContainer>
                    </> 
                   
                ))}
               
            </ul>
            
        </div>
    )
}

export default connect()(PomodoroTodoItems)