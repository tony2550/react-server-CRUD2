import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router';
import Header from './components/Header';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import UpdatePage from './pages/UpdatePage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/list" exact={true} component={ListPage} />
      <Route path="/write" exact={true} component={WritePage} />
      <Route path="/post/:id" exact={true} component={DetailPage} />
      <Route path="/post/:id/update" exact={true} component={UpdatePage} />
    </div>
  );
}

export default App;
