import React, { Fragment } from 'react';
import { GlobalStyle } from './style';
import { IconFont } from './static/iconfont/iconfont'
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFont />
      <Provider store={store}>
          <Header />
      </Provider>
    </Fragment>
  );
}

export default App;
