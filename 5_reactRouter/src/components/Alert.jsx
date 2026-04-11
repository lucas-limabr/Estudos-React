import React from 'react'

export default function Alert({feedback}) {
   
    let classname = (feedback.type == 'success') ? 'feedback feedback-success' : 'feedback feedback-error' 
    return (
    <p className={classname}>{feedback.message}</p>
  )
}
