import {Link} from "react-router-dom";
function Home(){
    return (
        <div className ="Container text-center">
            <h1>Welcome to Home Page</h1>
            <link to='/'>Home</link>
            <link to='/login'>Login</link>
        </div>

    );
}

export default Home;