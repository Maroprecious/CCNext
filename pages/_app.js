import "react-bootstrap-typeahead/css/Typeahead.css";
import "../src/App.css";
import { wrapper, } from "../src/store/index";
import { persistor, store } from '../src/store/index'
import { Provider } from "react-redux";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react'
import { CartProvider } from "../src/context/cart.context";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <CartProvider>
              <Component {...pageProps} />
            </CartProvider>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              style={{ width: "100%", height: "20rem" }} />
          </PersistGate>
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default wrapper.withRedux(MyApp);
