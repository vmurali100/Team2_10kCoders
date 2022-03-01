import React from 'react'
import reportWebVitals from './../reportWebVitals';

export const EmailVerification = () => {
  return (
    <div className="container">
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <form className="row row-cols-lg-auto g-3 align-items-center" role="form">

            <div className="form-group mb-3">
              {/* <label className="sr-only">Email verification code</label> */}
              <input type="text" className="form-control" id="name" placeholder="Email verification code" />
            </div>

            <button type="submit" className="btn btn-primary">Verify</button>

          </form>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}
