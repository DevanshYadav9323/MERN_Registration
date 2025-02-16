import { useState } from 'react'
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../css/Registration.css"

function Registration() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
    });


    const registerUser = async (e) => {

        e.preventDefault();

        const { FirstName, LastName, Email, Password } = data;

        try {

            const { data } = await axios.post("/register", { FirstName, LastName, Email, Password });

            if (data.error) {
                toast.error(data.error);
            }
            else {
                toast.success("Registration Successful , Kindly Login");
                navigate("/login");
                setData({});
            }


        } catch (error) {
            console.log(error);
        }

    }


    return (
        <>
            <div className="registration__wrapper">
                <div className="registration__container">
                    <h1 className="registration__title">Register</h1>
                    <form className="registration__form" onSubmit={registerUser}>

                        <div className="registration__row">
                            <div className="registration__group">
                                <label className="registration__label name__label">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    className="registration__input"
                                    value={data.FirstName}
                                    onChange={(e) => setData({ ...data, FirstName: e.target.value })}
                                />
                            </div>

                            <div className="registration__group">
                                <label className="registration__label name__label">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    className="registration__input"
                                    value={data.LastName}
                                    onChange={(e) => setData({ ...data, LastName: e.target.value })}
                                />
                            </div>
                        </div>

                        <label className="registration__label">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="registration__input"
                            value={data.Email}
                            onChange={(e) => setData({ ...data, Email: e.target.value })}
                        />

                        <label className="registration__label">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="registration__input"
                            value={data.Password}
                            onChange={(e) => setData({ ...data, Password: e.target.value })}
                        />

                        <button type="submit" className="registration__button">Signup</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration
