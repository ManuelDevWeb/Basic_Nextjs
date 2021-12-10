import React from 'react';
import { useRouter } from 'next/router';

const ProductItem=()=>{
    const {
        query:{productId}
    }=useRouter();

    return(
        // Query tiene los parametros que se pasan en la url
        <div>Esta es la página del producto: {productId} </div>
    )
}

export default ProductItem;