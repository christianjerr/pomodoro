import styled from 'styled-components'

type margin = {
    marginBottom?: string,
    marginTop?: string,
    marginLeft? : string,
    marginRight? : string
}

export const BtnContainer = styled.ul`
    li {display: inline-block};
`
export const Margin = styled.div<margin>`
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
`