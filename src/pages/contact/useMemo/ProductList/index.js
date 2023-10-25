import React, { useMemo, useState } from 'react';

const ProductList = ({ products }) => {
  const [sortBy, setSortBy] = useState('price-asc');
  const testProducts = [products]; // Chứa một tham chiếu đến mảng products, Điều này có nghĩa là bất kỳ thay đổi nào thực hiện trên testProducts sẽ phản ánh ngay lập tức trên mảng products ban đầu.
  const testProducts1 = [...products]; // tạo ra một bản sao độc lập của mảng products, không chia sẻ tham chiếu với mảng ban đầu.
  const sortedProducts = useMemo(() => {
    const copyOfProducts = [...products];
    if (sortBy === 'price-asc') {
      return copyOfProducts.sort((a, b) => a.price - b.price); // sắp xếp từ lớn đến bé
    } else if (sortBy === 'price-desc') {
      return copyOfProducts.sort((a, b) => b.price - a.price); // sắp xếp từ bé đến lớn
    } else if (sortBy === 'name-asc') {
      return copyOfProducts.sort((a, b) => a.name.localeCompare(b.name)); // sắp xếp theo tên
    } else {
      return copyOfProducts.sort((a, b) => a.price - b.price);
    }
  }, [products, sortBy]); // callback sẽ được gọi lại khi product hoặc sortBy thay đổi
  console.info(sortBy, '--------1---------');
  console.info(testProducts, '--------2---------');
  console.info(testProducts1, '--------3---------');
  return (
    <>
      <h1>Product List</h1>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="price-desc">Price: High to Low</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="name-asc">Name: A to Z</option>
      </select>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
