import styled, { css } from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";


type StyledBtnPropsTypes = {
  color?: string,
  fontSize?: string,
  btnType?: 'primary' | 'outlined',
  active?: boolean 
}

export const StyledBtn = styled.button<StyledBtnPropsTypes>`
  border: none;
  padding: 10px 20px;
  border-radius: none;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;

  //outlined
  ${props => props.btnType === 'outlined'  && css<StyledBtnPropsTypes>`
   border: 2px solid ${props => props.color || 'red'};
   color: ${props => props.color || 'red'};
   background-color: transparent;

   &:hover {
    border-color: pink;
    color: pink;
    background-color: transparent;
   }
  `}
  
 

  //primary
  ${props => props.btnType === 'primary' && css<StyledBtnPropsTypes>`
  background-color: ${props => props.color || 'red'};
  border: 2px solid ${props => props.color || 'red'};
  /* color: ${props => props.color || 'red'}; */
  `}
    &:hover{
background-color: #ec2ecd;
  }
  &:last-child{
background-color: #54ec2e;
  }
  
  ${props => props.active  && css<StyledBtnPropsTypes>`
  box-shadow: 5px 5px 5px 5px rgba(58, 58, 83, 0.6);
  `}
`



export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #f1fa76ea;
  color: black;
  &:hover{
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }


`


