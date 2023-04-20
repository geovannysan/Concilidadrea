import logo from './logo.svg';
import './App.css';
import ArchivosViews from './Pages/Archivos';
import ConciliaView from './Pages/Concilia';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import TablasViews from './Component/Tablas/TablasView';
import { SnackbarAction, useSnackbar, SnackbarProvider } from "notistack";
//import './tabl.css';
import SinciliarView from './Pages/SinConciliar';

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={4}>
      <BrowserRouter>
        <Switch>
          <Route path='/files' render={(props) => <ArchivosViews {...props} />} />
          <Route path='/concilia' render={(props) => <ConciliaView {...props} />}
          />
            <Route path='/Consolidar' render={(props) => <SinciliarView {...props} />} />
          <Route path="/" render={() => <Redirect from="/" to="/files" />} />

        </Switch>
      </BrowserRouter>
      </SnackbarProvider>

    </>
  );
}

export default App;
