import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Trans } from 'react-i18next'
// import { I18nextProvider } from 'react-i18next';
import i18n from './language/i18n.ts';
import { Provider } from "react-redux";
import store from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Trans i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider> 
  </Trans>
)
