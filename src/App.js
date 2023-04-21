import logo from './logo.svg';
import './App.css';
import ArchivosViews from './Pages/Archivos';
import ConciliaView from './Pages/Concilia';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import TablasViews from './Component/Tablas/TablasView';
import { SnackbarAction, useSnackbar, SnackbarProvider } from "notistack";
import ReportComplete from './Component/ReporteComplete';
import { Provider } from 'react-redux';
//import './tabl.css';
import SinciliarView from './Pages/SinConciliar';
import { store } from './StoreRedux/store';
/*declare module "notistack" {
  interface VariantOverrides {
    reportComplete: true;
  }
}*/

function App() {
  return (
    <Provider store={store}>

      <SnackbarProvider maxSnack={4}
        Components={{
          reportComplete: ReportComplete
        }}
      >
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

    </Provider>
  );
}

export default App;
