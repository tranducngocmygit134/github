import styled from 'styled-components';

import { text1 } from './styledVariable';

/** 
 * Button
 * @param {font} - change font of botton from props
 * @param {color} - change color and border of button from props
 * @param {background} - change color of background of button from props
 * @param {padding} - change padding of button from props
 *
 * @return {button} - button tag
 */
const fontBtn = (props) => {
  return props.font !== undefined ? props.font : '1.5rem';
};
const colorText = (props) => {
  return props.color !== undefined ? props.color : text1;
};
const padding = (props) => {
  return props.padding !== undefined ? props.padding : '5px 10px';
};
const width = props => {
  return props.width;
}
const Button = styled.button`
  font-size: ${(props) => fontBtn(props)};
  text-transform: capitalize;
  outline: none;
  border: 2px solid ${(props) => colorText(props)};
  border-radius: 10px;
  padding: ${(props) => padding(props)};
  width: ${props => width(props)};

  color: ${(props) => colorText(props)};
  background-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => colorText(props)};
    color: ${text1};
  }
`;



export { Button };
