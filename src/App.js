import logo from './logo.svg';
import './App.css';
import ArchivosViews from './Pages/Archivos';
import ConciliaView from './Pages/Concilia';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
   <BrowserRouter>
   <Switch>
    <Route path='/files' render={(props)=> <ArchivosViews {...props}/>} />
    <Route path='/concilia' render={(props)=><ConciliaView {...props}/>}
  />
          <Route path="/" render={() => <Redirect from="/" to="/files" />} />

   </Switch>
   </BrowserRouter>
   
    </>
  );
}

export default App;
