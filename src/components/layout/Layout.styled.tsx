import styled from "styled-components";

type StyledLayPropsTypes = {
    width?: string,
    height?: string,  
    top?: string,
    left?: string,
    color?: string,
    fontSize?: string,
    fontWeight?: string,
    lineHeight?: string,
    fontStyle?: string,
    background?: string,
}

export const StyledLay = styled.div<StyledLayPropsTypes>`
width: ${props => props.width};
height: ${props => props.height};
background-color: white;
border-radius: 15px;
box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
`

export const StyledDiv = styled.div<StyledLayPropsTypes>`
color: ${props => props.color };
font-family: 'Inter';
font-size: ${props => props.fontSize};
font-style: ${props => props.fontStyle};
font-weight: ${props => props.fontWeight};
line-height: ${props => props.lineHeight};
position: absolute;
top: ${props => props.top};
left: ${props => props.left};
width: ${props => props.width};
height: ${props => props.height};
`
export const StyledImg = styled.img<StyledLayPropsTypes>`
position: absolute;
top: 10px;
left: 10px;
width: 280px;
height: 170px;
flex-shrink: 0;
border-radius: 10px;
background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`
export const StyledBtn = styled.button<StyledLayPropsTypes>`
width: 86px;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
background: ${props => props.background};
position: absolute;
top: ${props => props.top};
left: ${props => props.left};
border: solid 2px #4E71FE;
`
export const StyledSpan = styled.span<StyledLayPropsTypes>`
color: #FFF;
font-family: 'Inter';
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 20px; /* 200% */
color: ${props => props.color };
`