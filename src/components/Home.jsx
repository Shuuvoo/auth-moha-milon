import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Home = () => {

    const authInfo = useContext(AuthContext)
    console.log(authInfo)
    return (
        <div>
            <h2 className="text-5xl text-pink-700 text-center">This Is Home for: {authInfo.name}</h2>
        </div>
    );
};

export default Home;