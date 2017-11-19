import React from 'react'
import pic from '!file-loader!./me.JPG'

const imgStyle = {
  'borderRadius': '20px',
  width: '200px'
};

const flexContainerStyle = {
  display: 'flex'
};

const fixedStyle = {
  width: '200px'
};

const flexibleStyle = {
  flexGrow: 1,
  padding: '10px',
  'flexFlow': 'row wrap',
  fontSize: '60px',
  fontFamily: 'Arial',
  height: '300px',
  lineHeight: '1.1em'
};

const IndexPage = () => (
  <div style={ flexContainerStyle }>
    <div style={ fixedStyle } classID='photo'><img style={ imgStyle } src={ pic }/></div>
    <div style={ flexibleStyle } classID='bio'>
      Hello, I'm Kyle.
      I turn coffee into code.
    </div>
  </div>
)

export default IndexPage
