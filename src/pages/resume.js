import React from 'react'

const iFrameStyle = {
  position: 'absolute', height: '100%', border: 'none', width: '100%'
};
const Resume = () => (
  <div>
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vT_Avt_ufvS5fJzsZeQ3358dCADUuPrgi4DMIZQ-R5IpOYDkkkiI3RDidiji9poQ86ZDGrFrl89R9pV/pub?embedded=true" onload="this.width=screen.width;this.height=screen.height;"
            style={iFrameStyle} />
  </div>
)

export default Resume
