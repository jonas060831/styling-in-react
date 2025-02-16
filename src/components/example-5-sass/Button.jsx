/*
1. We’ll use the sass package from npm:
npm install --save-dev sass

sass documentation
https://sass-lang.com/documentation/style-rules

2. create file with .sass extension then write your sass code init

*/

//3. import the sass file
import './Button.sass'


const Button = ({ buttonText }) => {
  return (
    //4. use the class from sassy
    <button className='sassy-button'>{buttonText}</button>
  )
}

export default Button


/*

Here is a short list of additional tools to explore in Sass:

Variables
Nesting
Mixins
Functions
Partials & Importing
Inheritance
The ‘&’ Operator
Control Directives (if else)
Interpolation
Placeholders
Benefits and pitfalls

Sass introduces powerful features like variables, mixins, nesting, inheritance, and more that aren’t available in standard CSS. These features allow for writing more maintainable and concise styles. Sass helps organize large style sheets efficiently and enables reusability, making managing styles in large-scale projects easier.

Sass files need to be preprocessed into standard CSS before they can be used on a website. This adds an extra step in the development process, requiring tools for compilation and potentially increasing the initial setup complexity. Newcomers to Sass may also face a learning curve in understanding its syntax and features, particularly if they’re only familiar with traditional CSS.

*/