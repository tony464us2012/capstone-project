import React from 'react'

const Login = () => {
  return (
    <div className='login'>
      <h1 className='text-center'>Login</h1>

      <form className="row g-3 needs-validation" novalidate>
 
      <div>
        <label for="validationCustomUsername" className="form-label">Username</label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">@</span>
          <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
          <div className="invalid-feedback">
            Enter your username.
          </div>
        </div>
      </div><br></br>
      <div>
        <label for="validationCustomUsername" className="form-label">Password</label>
        <div className="input-group has-validation">
          <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
          <div className="invalid-feedback">
            Enter your password.
          </div>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" disabled={true} type="submit">Submit form</button>
      </div>
</form>
  </div>
  )
}

export default Login