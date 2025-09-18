import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/index.css'
import './styles/switch.css'
import './styles/header.css'
import './styles/CollegeCarousel.css'
import './styles/global.css'
import './hooks/i18n.ts'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { persistor, store } from './store/index.ts';
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);