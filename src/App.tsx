import React , { useState } from 'react';
import './App.css';
import * as Style from '../src/components/styles'
import * as types from '../src/components/types'
import TodoMain from './components/TodoMain'
import { StateAll } from '../src/components/types';
import { connect } from 'react-redux';
import { deconstructedItems } from './ducks/types';
import AddTodo from '../src/components/AddTodo'
import PomodoroMainContainer from './PomodoroTodo/PomodoroMainContainer';
import PomodoroTodoItems from './PomodoroTodo/PomodoroTodoItems';

let countdown: number;

const App = ({
  todos , 
  notes , 
  checklist , 
  showTodo , 
  pomodoroTodo,
  pomodoroChecklist,
  pomodoroChecklistItems
} : deconstructedItems) => {

  const [minutesDisplay , setMinutes] = useState<string>()
  const [reset , setReset ] = useState<string>('')
  const [timers , setTimers ] = useState<types.timersType>({
    pomodoro: 25 ,
    pomodoroStatus: false,
    shortBreak: 5 , 
    shortBreakStatus: false,
    longBreak: 10 , 
    LongBrekStatus: false,
    loop: 25,
    LoopStatus: false
  })
  const [showCustomTimer , setShowCustomTimer] = useState<boolean>(false)

  const displayTimeLeft = React.useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60;
    setMinutes(`${minutes}:${remainderSeconds < 10 ? `0${remainderSeconds}` : remainderSeconds}`)
  },[])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    timers.pomodoroStatus ? mainTimer(isNaN(timers.pomodoro) ? '' : convert(`${timers.pomodoro}:00`)) : 
    timers.shortBreakStatus ? mainTimer(isNaN(timers.shortBreak) ? '' : convert(`${timers.shortBreak}:00`)) :
    timers.LongBrekStatus ? mainTimer(isNaN(timers.longBreak) ? '' : convert(`${timers.longBreak}:00`)) : 
    timers.LoopStatus ? mainTimer(isNaN(timers.loop) ? '' : convert(`${timers.loop}:00`)) : 
    mainTimer(isNaN(timers.pomodoro) ? '' : convert(`${timers.pomodoro}:00`))
    clearInterval(countdown)
    setShowCustomTimer(false)
  }

  const mainTimer = React.useCallback((seconds: any) => {
    const now = Date.now()
    const then = now + seconds * 1000
    displayTimeLeft(seconds)
    
    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if(secondsLeft < 0 ){
        clearInterval(countdown);
        return;
      }
      displayTimeLeft(secondsLeft)
    },1000)

  },[displayTimeLeft])

  const convert = React.useCallback((input:any) => {
    var parts = input.split(':'),
        minutes = +parts[0],
        seconds = +parts[1];
    return (minutes * 60 + seconds).toFixed(3);
},[])

  const handleReset = React.useCallback(() => {
    clearInterval(countdown)
    reset === 'pomodoro' ? mainTimer(isNaN(timers.pomodoro) ? '' : convert(`${timers.pomodoro}:00`)) : 
    reset === 'shortBreak' ? mainTimer(isNaN(timers.shortBreak) ? '' : convert(`${timers.shortBreak}:00`)) : 
    reset === 'longBreak' ? mainTimer(isNaN(timers.longBreak) ? '' : convert(`${timers.longBreak}:00`)) : 
    mainTimer(isNaN(timers.pomodoro) ? '' : convert(`${timers.pomodoro}:00`))
    clearInterval(countdown)
  },[convert, mainTimer, reset, timers.longBreak, timers.pomodoro, timers.shortBreak])

  

  const handleStart = React.useCallback(() => {
    clearInterval(countdown)
    let remainingTime  = minutesDisplay ?  convert(minutesDisplay) : convert('25:00')
    mainTimer(Number(remainingTime))
  },[convert, mainTimer, minutesDisplay])

  const handlePause = React.useCallback(() => {
    clearInterval(countdown)
  },[])
  
  const handlePomodoroClick = React.useCallback(() => {
    setTimers({...timers , pomodoroStatus: true , shortBreakStatus : false, LongBrekStatus: false , LoopStatus: false})
    clearInterval(countdown)
    mainTimer(isNaN(timers.pomodoro) ? '' : convert(`${timers.pomodoro}:00`))
    clearInterval(countdown)
    setReset('pomodoro')
  },[convert, mainTimer, timers])

  const handleShortBreak = React.useCallback(() => {
    setTimers({...timers , pomodoroStatus: false , shortBreakStatus : true, LongBrekStatus: false , LoopStatus: false})
    clearInterval(countdown)
    mainTimer(isNaN(timers.shortBreak) ? '' : convert(`${timers.shortBreak}:00`))
    clearInterval(countdown)
    setReset('shortBreak')
  },[convert, mainTimer, timers])

  const handleLongBreak = React.useCallback(() => {
    setTimers({...timers , pomodoroStatus: false , shortBreakStatus : false, LongBrekStatus: true , LoopStatus: false})
    clearInterval(countdown)
    mainTimer(isNaN(timers.longBreak) ? '' : convert(`${timers.longBreak}:00`))
    clearInterval(countdown)
    setReset('longBreak')
  },[convert, mainTimer, timers])

  const handleLoopBreak = React.useCallback(() => {
    setTimers({...timers , pomodoroStatus: false , shortBreakStatus : false, LongBrekStatus: false , LoopStatus: true})
    clearInterval(countdown)
    mainTimer(isNaN(timers.loop) ? '' : convert(`${timers.loop}:00`))
    clearInterval(countdown)
    setReset('loop')
  },[convert, mainTimer, timers])

  

  const handlePomodoroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimers({...timers , pomodoro : parseInt(e.target.value)})
  }
  const handleShortBreakChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimers({...timers , shortBreak : parseInt(e.target.value)})
  }
  const handleLongBreakChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimers({...timers , longBreak : parseInt(e.target.value)})
  }
  const handleLoopChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTimers({...timers , loop : parseInt(e.target.value)})
  }

  const handleCustomTimerToggle = () => { 
    setShowCustomTimer(true)
    clearInterval(countdown)
  }

  const handleCustomTimerClose = () => {
    setShowCustomTimer(false)
    clearInterval(countdown)
  }

  return (
    <Style.MainContainer>
      <div>
        { 
          showCustomTimer && (
            <form onSubmit={(e) => handleSubmit(e)}>
              <ul>
              <li><p>POMODORO</p> <input type="number" value={timers.pomodoro} onChange={(e) => handlePomodoroChange(e)} /></li>
              <li><p>SHORT BREAK</p> <input type="number" value={timers.shortBreak} onChange={(e) => handleShortBreakChange(e)} /> </li>
              <li><p>LONG BREAK</p> <input type="number" value={timers.longBreak} onChange={(e) => handleLongBreakChange(e)}/></li>
              <li><p>LOOP</p> <input type="number" value={timers.loop} onChange={(e) => handleLoopChange(e)} /><br/></li>
              </ul>
              <br/><Style.FormButton background="#83B8ff" type='submit'>Save</Style.FormButton> <Style.FormButton background="#FF7582" type='submit' onClick={handleCustomTimerClose}>Close</Style.FormButton>
            </form>
          )
        }
      <Style.PomodoroTimeList>
        <li><Style.Button onClick={handleCustomTimerToggle}>CUSTOM TIMER</Style.Button></li>
        <li><Style.Button onClick={handlePomodoroClick}>POMODORO</Style.Button></li>
        <li><Style.Button onClick={handleShortBreak}>SHORT BREAK</Style.Button></li>
        <li><Style.Button onClick={handleLongBreak}>LONG BREAK</Style.Button></li>
        <li><Style.Button onClick={handleLoopBreak}>LOOP</Style.Button></li>
      </Style.PomodoroTimeList>
      <Style.Center><Style.Number>
        { minutesDisplay ? minutesDisplay : '25:00' }
      </Style.Number></Style.Center>
      <Style.PomodoroBtnList>
        <li><Style.Button onClick={handleStart}>START</Style.Button></li>
        <li><Style.Button onClick={handlePause}>STOP</Style.Button></li>
        <li><Style.Button onClick={handleReset}>RESET</Style.Button></li>
      </Style.PomodoroBtnList>
      </div>
      <div style={{display: 'none'}}>
      <span style={{display: 'hidden',border: '5px solid red' , padding: '10px'}}>
      <span style={{display: 'hidden' , color: 'maroon'}}>Depricated</span>
      <AddTodo />
      <TodoMain todos={todos}/></span>
      </div>
      <PomodoroTodoItems pomodoroTodo={pomodoroTodo} pomodoroChecklist={pomodoroChecklist} pomodoroChecklistItems={pomodoroChecklistItems}/>
      <PomodoroMainContainer notes={notes} checklist={checklist} showTodo={showTodo}/>
    </Style.MainContainer>
  );
};

const mapStateToProps = (state: StateAll) => ({
  todos: state.todos,
  notes: state.notes ,
  checklist: state.checklist ,
  showTodo: state.showTodo,
  pomodoroTodo:  state.pomodoroTodo , 
  pomodoroChecklist: state.pomodoroChecklist,
  pomodoroChecklistItems: state.pomodoroChecklistItems
})

export default connect(mapStateToProps)(App);
