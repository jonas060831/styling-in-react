/*
styled-components

styled-components combine JavaScript’s tagged template literals with CSS, allowing you to write actual CSS for styling your components directly within your JavaScript files.

This method simplifies the process by directly associating styles with components, eliminating the need for separate CSS files or class names.

We will need to install the package styled-components from npm before we can use it. We should probably also familiarize ourselves with thestyled-components docs.


1.first is installing styled-components
*/

//2. second is importing it
import styled from "styled-components"

const Button = ({ buttonText }) => {

  const StyledButton = styled.button`
    background-color: #86ba8a;
    border-radius: 8px;
    color: #3d3d3d;
    padding: 15px 50px;
    font-size: 24pt;
    width: 300px;

  `
  return (
    <StyledButton>{buttonText}</StyledButton>
  )
}

export default Button