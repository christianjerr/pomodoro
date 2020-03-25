import styled from 'styled-components'

type marginTypes = {
    margin?: string
}
type fontSizeTypes = {
    fontSize?: string
}
type formType = {
    background: string;
}
export const Button = styled.button`
    padding: 10px 45px;
    border: none;
    border-radius: 5px;
    background-color: #83B8ff;
    color: #FFF;
    font-size: 25px;

    &:hover { 
        background-color: #248BD6;
        cursor: pointer;
    }
    &:focus {
        background-color: #248BD6;
        border-radius: 12px;
    }
`

export const FormButton = styled.button<formType>`
    padding: 3px 25px;
    border: none;
    background-color: ${props => props.background};
    color: #FFF;
    font-size: 18px;

    &:hover { 
        cursor: pointer;
        opacity: 0.8;
        

    }
    &:focus {
        cursor: pointer;
        opacity: 0.8;
        

    }
`
export const Number = styled.div`
    padding: 20px 0;
    color: #83B8ff;
    font-size: 200px;
    
    
`
export const Margin = styled.div<marginTypes>`
    margin: ${props => props.margin}px;
`
export const Center = styled.div`
    text-align: center;
`
export const FontSize = styled.div<fontSizeTypes>`
    font-size: ${props => props.fontSize}px;
`

export const PomodoroTimeList = styled.ul`
    padding: 20px 0;
    text-align:center;

    li {
        display: inline;
        padding: 0 5px;
        }
`
export const PomodoroBtnList = styled.ul`
    padding: 20px 0;
    text-align:center;

    li{
        display: inline;
        padding: 0 5px;
    }
`

export const MainContainer = styled.div`
    display: grid;
    height: 100vh;
    justify-content:center;
    align-items:center;
    
`