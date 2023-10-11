import { Suspense } from 'react';
import './App.css';
import RoutesPage from 'src/routers';
import Loading from './components/Loading';
import useCount from './hooks/useCount';

function App() {
  const { handleChangeDecrement, handleChangeIncrement, count } = useCount();
  console.info(count, '-------------1-----');
  return (
    <>
      <Suspense fallback={<Loading />}>
        <button onClick={handleChangeDecrement}>Decrement</button>
        <button onClick={handleChangeIncrement}>Increment</button>
        <RoutesPage />
      </Suspense>
    </>
  );
}
export default App;
