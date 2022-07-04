import { BrowserRouter as Router } from 'react-router-dom';
import './styles/style.css';
import './styles/fontello/css/fontello.css';
import 'normalize.css';
import { Routers } from './routers/Router';
import Navbar from './components/Navbar';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/*<Popup />*/}
        <div className="content ">
          <Routers />
        </div>
      </div>
    </Router>
  );
}
