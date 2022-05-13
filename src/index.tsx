import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AdminPanelContextProvider from './store/AdminPanelContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AdminPanelContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AdminPanelContextProvider>
);
