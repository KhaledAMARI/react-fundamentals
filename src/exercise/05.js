// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// custom Box Component
const Box = ({customStyle, size, children}) => {
  const style = Object.assign(customStyle, {fontStyle: "italic"});
  const sizeClassName = size ? `box--${size}` : '';
  return <div className={`box ${sizeClassName}`} style={style}> {children} </div>
};
// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle
const smallBoxStyle = {
  backgroundColor: 'lightblue'
};
const mediumBoxStyle = {
  backgroundColor: 'pink'
};
const largeBoxStyle = {
  backgroundColor: 'orange'
};
const smallBox = <Box size="small" customStyle={smallBoxStyle} children="small lightblue box" />
const mediumBox = <Box size="medium" customStyle={mediumBoxStyle} children="medium pink box" />
const largeBox = <Box size="large" customStyle={largeBoxStyle} children="large orange box" />

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
