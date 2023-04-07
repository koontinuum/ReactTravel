
import './App.css';
import RoutesComponent from './routes/RoutesComponent';
import Layout from './styles/Layout';
import { ThemeProider } from './styles/ThemeProvider';

function App() {


  return (
    <div >
      <ThemeProider>
        <Layout>
   <RoutesComponent />         
        </Layout>
      </ThemeProider>
      
    
    
     
    </div>
  );
}

export default App;
