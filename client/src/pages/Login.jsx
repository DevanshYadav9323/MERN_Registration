import { useState } from 'react';
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../css/Login.css";

function Login() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        Email: "",
        Password: "",
    });

    const loginUser = async (e) => {

        e.preventDefault();

        const { Email , Password } = data;

        try {

            const {data} = await axios.post("/login" , {Email , Password});

            if(data.error){
                toast.error(data.error);
            }
            else{
                toast.success("Login Successful");
                navigate("/dashboard");
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
                setData({});
            }
            
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
          <div className="login__wrapper">
            <div className="login__container">
                <h1 className="login__title">Login</h1>
                <form className="login__form" onSubmit={loginUser}>
                    <label className="login__label">Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter Your Email" 
                        className="login__input"
                        value={data.Email} 
                        onChange={(e) => setData({ ...data, Email: e.target.value })} 
                    />
                    
                    <label className="login__label">Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter Your Password" 
                        className="login__input"
                        value={data.Password} 
                        onChange={(e) => setData({ ...data, Password: e.target.value })} 
                    />
                    
                    <button type="submit" className="login__button">Login</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login
