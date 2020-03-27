import styled from 'styled-components'

type margin = {
    marginBottom?: string,
    marginTop?: string,
    marginLeft? : string,
    marginRight? : string
}

export const BtnContainer = styled.ul<margin>`
    margin-top : ${props => props.marginTop};
    li {display: inline-block};
`
export const Margin = styled.div<margin>`
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
`
export const TodoItemContainer = styled.ul<margin>`
    margin-bottom : ${props => props.marginBottom};
    padding: 10px;
    background: #83B8ff;
    color: #fff;
    font-size: 20px;
`
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