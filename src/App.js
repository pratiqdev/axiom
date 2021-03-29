import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// import pages
import MdArticles from './pages/MdArticles'

// import components

function App() {
  return (
    <BrowserRouter>
        
        

        <Link to="/">Home</Link>
        <Link to="/md-to-article">Md to Article</Link>
        
        {/* Generate a link for each directory, and each file */}

        
        <Switch>
          <Route path="/" exact>
            <h2>Axiom</h2>
          </Route>
           <Route path="/md-to-article" component={MdArticles}  />

           {/* instead of using routes to manage articles, why not create an article component that will load the .md based on the current url / path??? */}


        </Switch>
    </BrowserRouter>
  );
}

export default App;