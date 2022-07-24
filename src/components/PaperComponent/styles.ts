import styled, {css} from 'styled-components'

interface PaperComponentProps {
    width?: string;
    height?: string;
    border?: boolean;
    borderWidth?: string;
    title?: string;
}

export const Container = styled.div<PaperComponentProps>`
    ${({width, height, border, borderWidth}) => css`
        width: ${width};
        height: ${height};
        
        ${() => border && css`
            border: ${borderWidth} solid #c2c2c2;
        `}
         
    `}
`