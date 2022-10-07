import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from "./store/store";
import App from './App';
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>,
);
//routing pages in react?
// {/* <Router history={browserHistory}> */}
  // <Route path='/' component={App} >
    // <IndexRoute component={Home} />
    // <Route path='product/:productId' component={Product} />
    // <Route path='category/:catNumber' component={Category} />
    // <Route path='cart' component={Cart} />
  // </Route>
  // <Route path='*' component={NotFound} />
// </Router>


