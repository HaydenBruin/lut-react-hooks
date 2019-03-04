
import React, { useState, useContext } from "react";
import { UserContext } from './App'

const Refactor = () => {
    const [isToggled, setToggled] = useState( false );

    const userInfo = useContext( UserContext );

    if ( !isUserLoggedIn( userInfo ) ) return null;

    return (
        <div>
            <button onClick={() => setToggled( !isToggled )}>Toggle</button>
            {isToggled && <h2>Hello!</h2>}
        </div>
    );
}

function isUserLoggedIn( userInfo ) {
    return userInfo.user;
}

export default Refactor