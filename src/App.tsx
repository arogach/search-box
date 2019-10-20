// import { hot } from 'react-hot-loader/root'
import * as React from 'react';
import './App.scss';

import { Search } from './search'

const App: React.FC = () => (
  <div className="App">
    <Search />
  </div>
)

// export default hot(App)
export default App