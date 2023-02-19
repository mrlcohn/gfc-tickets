import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [photos, setPhotos] = useState([]);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/');
    }
    return (
        <div className="create">
            <form className="entryForm" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="item">
                        <label>First Name</label>
                        <input
                            type="text"
                            required
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="item">
                        <label>Last Name</label>
                        <input
                            type="text"
                            required
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="item">
                        <label>Area of Camp</label>
                        <select
                            required
                            value={location1}
                            onChange={e => setLocation1(e.target.value)}
                            >
                            <option value="cabins">Cabins</option>
                            <option value="oac">Old Activities Center</option>
                            <option value="nac">New Activities Center</option>
                        </select>
                    </div>
                    <div className="item">
                        <label className="form">Building/Space</label>
                        <select
                            required
                            value={location2}
                            onChange={e => setLocation2(e.target.value)}
                            >
                            <option value="a1">A1</option>
                            <option value="a2">A2</option>
                            <option value="b1">B1</option>
                            <option value="b2">B2</option>
                        </select>
                    </div>
                    <div className="item">
                        <label>Type</label>
                        <select
                            required
                            value={type}
                            onChange={e => setType(e.target.value)}
                            >
                            <option value="maintenance">Maintenance</option>
                            <option value="housekeeping">Housekeeping</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="item">
                        <label>Description</label>
                        <textarea
                            required
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="item">
                            <label>Email for Updates (optional)</label>
                        <input
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <button className="link">CREATE TICKET</button>
            </form>
        </div>
    );
}
 
export default CreateTicket;