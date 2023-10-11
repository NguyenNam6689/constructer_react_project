import React from 'react';
import useCount from 'src/hooks/useCount';

const Home = () => {
  const { count } = useCount();
  return (
    <>
      <h1>Home</h1>
      <div>{count}</div>
    </>
  );
};

export default Home;
