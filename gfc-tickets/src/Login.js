import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/');
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
                            value={email}
                            onChange = {e => setEmail(e.target.value)}
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
                            value={password}
                            onChange = {e => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button className="link">LOG IN</button>
            </form>
        </div>
    );
}
 
export default Login;