/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared_pages/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {
    const {logIn}  = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate()

    

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
        logIn(email,password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state: '/')
        })
        .catch(error =>{
            console.error(error)
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h2 className="text-2xl font-semibold text-center">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center mt-3">Don't have an account? <Link className="text-blue-600" to='/register'>Register</Link></p>
            </div>

        </div>
    );
};

export default LogIn;