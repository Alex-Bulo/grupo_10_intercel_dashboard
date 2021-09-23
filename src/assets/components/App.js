
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import ProtectedRoute from './ProtectedRoute';
import TestingComp from './TestingComp';
import '../css/App.css';
import { Switch, Route } from 'react-router-dom';

localStorage.setItem('isAuth', false)
function App() {
  return (
    <div className="App" style={{display:'flex'}}>
      <SideBar/>
      <Switch>
      
        <Route path="/login" component={TestingComp}/>
        <Route>
          <ProtectedRoute component={ContentWrapper}/>
        </Route>
      
      </Switch>
 
      {/* <ContentWrapper/> */}
    </div>
  );
}

export default App;
