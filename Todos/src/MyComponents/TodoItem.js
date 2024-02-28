import React from 'react'

export const TodoItem = ({amit, onDelete}) => {
  return (
    <>
    <div>
      <h4>{amit.title}</h4>
      <p>{amit.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(amit)}}
      >Delete</button>
    </div>
     <hr/>
     </>
  )
}
