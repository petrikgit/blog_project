import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../assets/css/login.css';
import { useNavigate } from 'react-router-dom';
import { loginRoute, findUser } from '../utils/APIRoutes';
import TransparentLogo from '../assets/img/transparent_logo_white.png'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import bcrypt from 'bcryptjs'
import { hideLoader, showLoader } from '../assets/js/helpers.js'
import { Helmet } from 'react-helmet-async'

function Login() {

    const navigate = useNavigate();

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }

    const [values, setValues] = useState({
        email: "",
        password: "",
    });


    useEffect(() => {
        showLoader()
        if (localStorage.getItem('admin')) {
            navigate('/admin_dashboard')
        }
        hideLoader()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation()) {
            const { email, password } = values;
            // const hashedPassword = await bcrypt.hash(password, 10);

            const foundUser = await axios.get(findUser, {
                params: {
                    email
                }
            })


            if (foundUser.data) {

                const passwordMatch = await bcrypt.compare(password, foundUser.data.password);

                if (passwordMatch) {
                    const { data } = await axios.post(loginRoute, {
                        email,
                        password: foundUser.data.password,
                    });

                    localStorage.setItem('admin', JSON.stringify({ role: "admin", id: data.data._id, email: data.data.email }));
                    navigate("/admin_dashboard");
                    window.location.reload(false);
                } else {
                    toast.error('Incorrect password.', toastOptions);
                }

            } else {
                toast.error('No user was found', toastOptions);
            }
        }
    };

    const handleValidation = () => {
        const { email, password } = values;

        if (password === "") {
            toast.error("Email and password is required.", toastOptions);
            return false;
        } else if (email.length === "") {
            toast.error("Email and password is required.", toastOptions);
            return false;
        }
        return true;
    }

    const handleChange = (e) => {
        e.preventDefault();
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        const loadData = async () => {
            await new Promise((r) => setTimeout(r, 1000));
        };


        loadData();
    }, [])

    return (
        <section className="ftco-section" style={{ height: "100vh" }}>
            <Helmet>
                <title>Prihlásenie | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
                <meta name="description" content="Prihlasovacia stránka pre administráciu. | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"></meta>
                <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
                <link rel="canonical" href={`/admin`}></link>
            </Helmet>
            <div className="col-md-12" style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                <div className="login-wrap p-4 p-md-5" style={{backgroundColor: "#141E2A"}}>
                    <a href="/"><img alt="transparent_logo" id="header-logo-transparent-id" src={TransparentLogo} /></a>
                    <form action="#" className="login-form">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control rounded-left"
                                placeholder="Username"
                                required=""
                                name="email"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="form-group d-flex">
                            <input
                                type="password"
                                className="form-control rounded-left"
                                placeholder="Password"
                                name="password"
                                required=""
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary rounded submit p-3 px-5"
                                onClick={(event) => handleSubmit(event)}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer>

            </ToastContainer>
        </section>
    )
}

export default Login