import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import { store } from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
