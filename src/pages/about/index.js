import React from 'react';
import useCount from 'src/hooks/useCount';

const About = () => {
  const { count } = useCount();
  return (
    <>
      <h1>About</h1>
      <div>{count}</div>
    </>
  );
};

export default About;
