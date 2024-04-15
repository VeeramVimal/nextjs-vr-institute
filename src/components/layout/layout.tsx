import React, { useEffect, useState, ReactNode } from "react";
//** component imported */
import Header from "./heater";
import Footer from "./footer";
type MyComponentProps = {
    children: ReactNode;
}
const Layout: React.FC<MyComponentProps> = ({children}) => {

    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
};
export default Layout;