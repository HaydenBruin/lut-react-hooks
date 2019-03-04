import React, { useRef, useEffect, createContext, useMemo } from 'react'
import { useTitleInput } from './hooks/use-title-input'
import Toggle from './toggle'
import Counter from './counter'

export const UserContext = createContext();

const App = () => {
    const [name, setName] = useTitleInput( '' );
    const ref = useRef();

    const reverseWord = word => {
        console.log('function called');
        return word.split('').reverse().join('');
    }

    const title = 'Level up dishes';
    const titleReversed = useMemo(() => reverseWord(title), [title])

    useEffect( () => {
        console.log( 'ref: ', ref.current.className );
    } )

    return (
        <UserContext.Provider value={{
            user: false
        }}>
            <div className="main-wrapper" ref={ref}>
                <h1 onClick={() => console.log( ref.current.className )}>{titleReversed}</h1>

                <form onSubmit={e => {
                    e.preventDefault();
                    formSubmit( name, setName );
                }}>
                    <input type="text" onChange={e => setName( e.target.value )} value={name} />

                    <button>Submit</button>
                </form>
            </div>
            
            <Toggle />
        </ UserContext.Provider>
    );
};

const formSubmit = ( value, setValue ) => {
    console.log( 'Email sent to ' + value );

    setValue( '' );
}



export default App;
