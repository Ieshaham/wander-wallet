import React from "react";
import { useNavigate } from "react-router-dom";


function Login () {

    const navigate = useNavigate();
    const goToLogin = () => navigate('/login');

    return (
        <button 
        onClick={goToLogin}
        type="button" 
        className="text-sm font-semibold leading-6 text-gray-900 bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded">
        Sign In
    </button>
    );
}

export default Login