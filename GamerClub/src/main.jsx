import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Root } from './routes/Root/Root';
import { Main } from './components/Main/Main';
import { Mous } from './components/Mous/Mous';
import { Keyboard } from './components/Keyboard/Keyboard';
import { Head } from './components/Head/Head';
import { Microfon } from './components/Microfon/Microfon';
import { Steaker } from './components/Steaker/Steaker';
import { Contac } from './components/Contac/Contac';
import { Kor } from './components/Kor/Kor';
import { Provider } from 'react-redux';
import store from "./app/store"
import { ProductSteaker} from './components/Steaker/ProductSteaker';
import { ProductMous } from './components/Mous/ProductMous';
import { ProductKeyboard } from './components/Keyboard/ProductKeyboard';
import { ProductHead } from './components/Head/ProductHead';
import { ProductMicrofon } from './components/Microfon/ProductMicrofon';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "Mous",
        element: <Mous />,
      },
      {
        path: "Keyboard",
        element: <Keyboard />
      },
      {
        path: "Head",
        element: <Head />
      },
      {
        path: "Microfone",
        element: <Microfon />
      },
      {
        path: "Steaker",
        element: <Steaker />
      },
      {
        path: "Contac",
        element: <Contac />
      },
      {
        path: "Kor",
        element: <Kor />
      },
      {
        path: "Steaker/product/:id",
        element: <ProductSteaker />
      },
      {
        path: "Mous/product/:id",
        element: <ProductMous />
      },
      {
        path: "Keyboard/product/:id",
        element: <ProductKeyboard />
      },
      {
        path: "Head/product/:id",
        element: <ProductHead />
      },
      {
        path: "Microfone/product/:id",
        element: <ProductMicrofon />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);