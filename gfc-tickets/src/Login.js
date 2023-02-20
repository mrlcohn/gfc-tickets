import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Login = () => {
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [loginAttempted, setLoginAttempted] = useState(false);
    const { data: login , isPending, error } = useFetch('http://localhost:8000/login');
    const navigate = useNavigate();

    const handleSubmit = e => {
        console.log(login.email + " " + login.password + "\n" + emailField + " " + passwordField);
        e.preventDefault();
        if (login.email === emailField && login.password === passwordField) {
            navigate('/success');
        } else {
            setLoginAttempted(true);
        }
    }

    return (
        <div className="login">
            <form className="entryForm" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="item">
                        <label>Email</label>
                        <input
                            type="email"
                            className="email"
                            required
                            value={emailField}
                            onChange = {e => setEmailField(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="item">
                        <label>Password</label>
                        <input
                            type="password"
                            className="email"
                            required
                            value={passwordField}
                            onChange = {e => setPasswordField(e.target.value)}
                        />
                    </div>
                </div>
                <button className="link">LOG IN</button>
                { loginAttempted && <div className="row">
                    <div className="item">
                        <label className="error">Invalid email or password</label>
                    </div>
                </div> }
            </form>
        </div>
    );
}
 
export default Login;