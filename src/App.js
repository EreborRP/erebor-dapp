
import './App.css';
import Home from './Pages/Home';
import NavigationBar from './Layouts/Header';
import Footer from './Layouts/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Pages/About';

function App() {
  return (
    <Router>
      <div className='fixed flex flex-col w-full h-full bg-black-primary'>
        <NavigationBar />
        <div className='flex-1'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
