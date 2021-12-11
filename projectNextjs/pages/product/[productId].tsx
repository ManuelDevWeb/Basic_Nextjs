import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

const ProductItem = () => {
    // State para almacenar el producto
    const [product, setProduct] = useState<TProduct>();

    // Router para obtener el id del producto por parametro
    const {
        query: { productId }
    } = useRouter();

    // UseEffect para obtener el producto de la API 'api/avo/id'
    useEffect(() => {
        if (productId) {
            window.fetch(`/api/avo/${productId}`)
                .then(response => response.json())
                //.then(data => console.log(data)));
                .then((data) => setProduct(data));
        }
    }, [productId])

    return (
        <section>
            <h1>Página producto.</h1>
            <h3>{product?.name}</h3>
            <p>{product?.attributes.description} </p>
        </section>
    )
}

export default ProductItem;
