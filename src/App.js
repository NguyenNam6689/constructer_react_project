import { Suspense } from 'react';
import './App.css';
import RoutesPage from 'src/routers';
import Loading from './components/Loading';

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RoutesPage />
      </Suspense>
    </>
  );
}
export default App;
