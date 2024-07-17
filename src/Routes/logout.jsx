import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(props){
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/auth/logout', {withCredentials: true})
        .then(res => {
            navigate("/login");
        })
        .catch(error => {
            console.log(error)
        })
    })
    return(
        <>
            <main className="container m-auto">
                <div className="flex flex-col items-center justify-center h-full mt-52">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Logging Out...........</h1>
                </div>
            </main>
        </>
    );
}

export default Logout;