import React from 'react'

export default function AppContent() {
    let time = new Date();
  return (
    <center>
      <h4 className='fst-italic'>This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h4>
    </center>
  )
}
