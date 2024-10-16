import React from 'react'
import { useRouteError } from 'react-router-dom';


function Error() {
  const err=useRouteError();
  console.log(err)
  return (
  <>
  <div>
    <h1>You have made an mistake <em className='error-text'>As Always!😊</em></h1>
    <h2>Wanna know your fault?</h2>
    <h3>Here we again..</h3>
    <p className='error-text'>{err?.status ? `Error ${err.status}` : 'Unknown Error'}</p>
    <p className='error-text'>{err?.statusText || err?.message || 'Something went wrong!'}</p>

  </div>
  </>
  )
}

export default Error;