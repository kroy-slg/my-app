import '../assets/css/Home.css'

const Home = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        window.location.reload();
    };

    return (
        <div className="home-container">
            <h2>Hello {user ? user.name : "User"}!</h2>
            {!user && <p>Please sign up, and then sign in to continue</p>}
            {user && <button className="logout-btn" onClick={handleLogout}>Logout</button>}
        </div>
    );
}

export default Home;