import { useContext, useEffect, useState } from "react";

import { UserContext } from "./UserContext";
import Login from "../Login";
import NavBar from "../Navbars";
import { Outlet } from "react-router-dom";


const ProtectedRoutes = (children) => {

    const [login, setLogin] = useState(false);
    const { user } = useContext(UserContext);

    const val = localStorage.getItem("uid");
    useEffect(() => {
        
        if (val !== '') {
            setLogin(true);
        }
    }, [user])
    
    return login? <Outlet/> : <div><NavBar/><Login/></div>;
};

export default ProtectedRoutes;

