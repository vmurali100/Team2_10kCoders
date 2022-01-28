import React from 'react';

export const Login = () => {
    return (<div>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-3'>
                <form>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>);
};
