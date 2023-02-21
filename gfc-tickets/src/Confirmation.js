const Confirmation = ({ user }) => {
    return (
        <div className="confirmation">
            { user.length > 0 && <p>Welcome, { user[0] }</p> }
            { user.length == 0 && <p>Thanks for logging out</p> }
        </div>
    );
}
 
export default Confirmation;