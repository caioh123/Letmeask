import {Route, BrowserRouter} from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import {AuthContextProvider} from './contexts/AuthContex'

function App() {  
  return (
    <BrowserRouter>
        <AuthContextProvider>
          <Route path="/" exact component={Home}/>
          <Route path="/rooms/new" component={NewRoom}/>
        </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;