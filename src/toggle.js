
import React, { useState } from "react";

const Refactor = () => {
    const [isToggled, setToggled] = useState(false);

    return (
        <div>
            <button onClick={() => setToggled(!isToggled)}>Toggle</button>
            {isToggled && <h2>Hello!</h2>}
        </div>
    );
}

export default Refactor