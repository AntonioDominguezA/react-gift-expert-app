import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Puch', 'Marvel', 'Goku'];
    const [categories, setcategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setcategories( [...categories, 'Nuevo'] );
    //     setcategories( cat => [...cat, 'Nuevo'] );
    // };

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory setcategories={ setcategories } />
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map(item => {
                        return <GifGrid 
                                key={ item } 
                                category={ item } 
                            />
                    })
                }
            </ol>
        </>
    )
}
