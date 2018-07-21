import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  browserHistory, Router, Route, IndexRoute,
} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main/Main';
import HomePageContainer from './containers/HomePageContainer';
import ResultPageContainer from './containers/ResultPageContainer';
import store from './store/configureStore';

// 引入 react-tap-event-plugin 避免 material-ui onTouchTap event 会遇到的问题
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// 用 react-redux 的 Provider 包起来将 store 传递下去，让每个 components 都可以存取到 state
// 这边使用 browserHistory 当做 history，并使用 material-ui 的 MuiThemeProvider 包裹整个 components
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={HomePageContainer} />
          <Route path="/result" component={ResultPageContainer} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
