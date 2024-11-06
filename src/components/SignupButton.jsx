import React from "react"
import { useNavigate } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate();
    
    const goToSignup = () => {
        navigate('/signup'); 
      };

    return (
<button 
            onClick={goToSignup}
            className="text-sm font-semibold leading-6 text-gray-900 bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded" 
            style={{ marginRight: '10px' }}>
            Sign Up
          </button>

    );
}

export default Signup