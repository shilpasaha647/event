import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import IndexRoute from './routes/IndexRoute';
 
function App() {
  return (
      <Router>
      <IndexRoute />
      </Router>
  );
}
 
export default App;