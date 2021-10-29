import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import Name from '@/components/Name';
import '@/App.scss';

const PostList = React.lazy(() => import('@/views/PostList'));
const PostView = React.lazy(() => import('@/views/PostView'));

const loading = () => <div></div>;

const App = () => {
  return (
    <React.Suspense fallback={loading()}>
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google
      </a>
      <Name name="dooh" mark="!" />
      <p>APP_BASE_URL: {process.env.APP_BASE_URL}</p>
      <p>APP_ENV: {process.env.APP_ENV}</p>
      <Router>
        <ul>
          <li>
            <Link to="/post/">PostList</Link>
          </li>
          <li>
            <Link to="/post/1">PostView</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/post/:id" component={PostView} />
          <Route exact path="/post/" component={PostList} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default App;
