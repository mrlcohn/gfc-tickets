const Confirmation = ({ user }) => {
    return (
        <div className="confirmation">
            <p>Confirmation page</p>
            <p>Welcome, { user[0] }</p>
        </div>
    );
}
 
export default Confirmation;