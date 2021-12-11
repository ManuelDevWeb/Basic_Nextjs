import React, { useEffect, useState } from 'react';

// Components
import { Navbar } from '../components/Navbar/Navbar';

const Home = () => {
    // State para almacenar el listado de los aguacates
    const [productList, setProductList] = useState<TProduct[]>([]);

    // UseEffect para el llamado de la API '/api/avo/
    useEffect(() => {
        window.fetch('/api/avo/')
            .then(response => response.json())
            // .then(data=>console.log(data))
            .then(({ allEntries, length }) => {
                // Seteamos el state de productList con el listado de aguacates
                setProductList(allEntries);
            });
    }, [])

    return (
        <div>
            <Navbar />
            <h1>Hola Platzi</h1>
            {
                // Iterando sobre el listado de aguacates
                productList.map(product => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default Home;