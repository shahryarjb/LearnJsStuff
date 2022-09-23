import React, { useEffect, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";

const Main = (props) => {
    const btnRef = useRef(null);
    const authContext = useContext(AuthContext)

    console.log(authContext.auth)
    
    useEffect(() => {
        console.log('Main.js useEffect')
        btnRef.current.click()
        return () => {
            console.log('CleanUp')
        }
    }, [])

    const btn = {
        backgroundColor: '#7b1fa2',
        color: '#ffffff',
        font: 'inherit',
        border: 'none',
        outline: 'none',
        borderRadius: '3px',
        padding: '0.6rem',
        margin: '0.6rem auto',
      }

    return(
        <div>
            <h2>Book Store</h2>
            <button ref={btnRef} style={btn} onClick={props.click}>
            Show/Hide Products
            </button>
            <button onClick={authContext.login}>Login</button>
        </div>
    )
}

export default Main