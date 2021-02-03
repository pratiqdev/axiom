import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// import pages
import Creator from './pages/Creator'

// import components

function App() {
  return (
    <BrowserRouter>
        
        

        <Link to="/">Home</Link>
        <Link to="/create-article">Create Article</Link>

        
        <Switch>
          <Route path="/" exact>
            <h2>Axiom?</h2>
          </Route>
           <Route path="/create-article" component={Creator}  />


        </Switch>
    </BrowserRouter>
  );
}

export default App;