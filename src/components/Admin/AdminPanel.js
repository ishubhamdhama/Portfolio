import React, { useState } from 'react';
import AdminUserPage from './AdminUserPage';

const AdminPanel = () => {
    const [adminEmail,setAdminEmail] = useState('');
    const [adminPass,setAdminPass] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const email = process.env.REACT_APP_EMAIL;
    const pass = process.env.REACT_APP_PASS;
    const handleOnEmailChange = (e) => {
        setAdminEmail(e.target.value)
    }
    const handleOnPasswordChange = (e) => {
        setAdminPass(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        try {
            if(adminEmail===email && adminPass===pass){
                console.log('Login Successfully')
                setLoggedIn(true)
            }else{
             console.log('Email or Password does not match')
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            {loggedIn ? <AdminUserPage/> : <div className='admin__login' style={{height:"auto",backgroundColor:"rgb(102, 100, 100)"}}>
                <section className="gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                                    <div className="card-body p-5 text-center">

                                        <div className="mb-md-5 mt-md-4 pb-5">

                                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                            <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                            <form onSubmit={handleOnSubmit}>
                                            <div className="form-outline form-white mb-4">
                                                <input type="email" id="typeEmailX" className="form-control form-control-lg" onChange={handleOnEmailChange}/>
                                                <label className="form-label" htmlFor="typeEmailX">Email</label>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={handleOnPasswordChange}/>
                                                <label className="form-label" htmlFor="typePasswordX">Password</label>
                                            </div>

                                            <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                            <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                            </form>
                                            <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                            </div>

                                        </div>

                                        <div>
                                            <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>}
        </>
    )
}

export default AdminPanel