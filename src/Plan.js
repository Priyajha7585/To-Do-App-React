import React from 'react'

function Plan(props) {
  return (
    <>
        {/* {console.log(props.data)} */}
        <div className="row">

        <li className='shadow p-2 my-2 col-sm-9  float-left'>{props.data}</li>
        <button className="btn btn-danger col-sm-2 my-2 offset-1 float-right" onClick={()=>{props.sendData(props.id)}}>Delete</button>
        </div>
    </>
  )
}

export default Plan