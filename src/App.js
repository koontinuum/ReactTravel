import { Suspense } from 'react';
import './App.css';
import RoutesComponent from './routes/RoutesComponent';


function App() {
  return (
    <div >
      <Suspense fallback={<div>Loading...</div>}>
      <RoutesComponent />
      </Suspense>
    </div>
  );
}

export default App;
