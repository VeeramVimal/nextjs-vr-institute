import React from "react";
import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css'
function ToastProvided ({ children }) {
    return (
        <>
        { children }
        <ToastContainer/>
        </>
    )
};
export default ToastProvided;