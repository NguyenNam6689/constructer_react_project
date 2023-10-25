//* React
import React, { useState } from 'react';

//* Component
import ProductList from '../ProductList';

//* Data
import { productDummy } from 'src/data/ProductDummy';
const Learn_1 = () => {
  const [products] = useState(productDummy);
  console.info(products, '-----------1----------');
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Learn_1;
