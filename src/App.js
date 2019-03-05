import React, { useState, useRef, useEffect, createContext } from 'react'

export const UserContext = createContext();

const App = () => {
    const [name, setName] = useState('');
    const ref = useRef(); 
    const [dishes, setDishes] = useState([]);

    const fetchDishes = async () => {
        const res = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
        const data = await res.json();
        setDishes(data);
    }
    useEffect(() => {
        fetchDishes();
    }, []);

    const addDish = (e) => {
        e.preventDefault();
        setName('');
        setDishes([
            {
                name: name,
                desc: 'An awesome version of ..',
                ingredients: [
                    'one',
                    'two',
                    'three'
                ]
            },
            ...dishes]
        )
    }

    return (
        <UserContext.Provider value={{
            user: false
        }}>
            <div className="main-wrapper" ref={ref}>
                <h1 onClick={() => console.log( ref.current.className )}>Level up dishes</h1>

                <form onSubmit={(e) => addDish(e)}>
                    <input type="text" onChange={e => setName( e.target.value )} value={name} />

                    <button>Submit</button>
                </form>

                {dishes && dishes.map((dish, index) => (    
                    <article key={index} className="dish-card dish-card--withImage">
                        <h3>{dish.name}</h3>
                        <p>{dish.desc}</p>
                        <div className="ingredients">
                            {dish.ingredients.map((ingredient, index) => (
                                <span key={index}>{ingredient}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
            
        </ UserContext.Provider>
    );
};



export default App;
