import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homescreen from './screens/homescreen/homescreen';
import MoreDetail from './screens/moredetail/moredetail';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Router>
      <Route path='/:id' component={MoreDetail} />
      <Route path='/' component={Homescreen} exact />
    </Router>
  );
}

export default App;
