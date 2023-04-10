import './App.css';
import RoutesComponent from './routes/RoutesComponent';
import Layout from './styles/Layout';
import { ThemeProider } from './styles/ThemeProvider';
import { Helmet } from 'react-helmet';
import logo from './assets/logo.svg';

function App() {
  return (
    <html lang="en">
      <head>
        <Helmet>
          <title>Travel</title>
          <link rel="icon" type="image/png" href={logo} sizes="16x16" />
        </Helmet>
      </head>
      <body>
        <ThemeProider>
          <Layout>
            <RoutesComponent />
          </Layout>
        </ThemeProider>
      </body>
    </html>
  );
}

export default App;