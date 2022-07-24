import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { setupStore } from "../store/index";

import { Provider } from "react-redux";

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (<Provider store={store}>
    <Component {...pageProps} />
  </Provider>)

}

export default MyApp;
