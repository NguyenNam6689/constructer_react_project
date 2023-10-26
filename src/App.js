import { Suspense } from 'react';
import './App.css';
import RoutesPage from 'src/routers';
import Loading from './components/Loading';
import useCount from './hooks/useCount';
import Libs from './libs/lib';

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <RoutesPage /> */}
        <Libs />
      </Suspense>
    </>
  );
}
export default App;
