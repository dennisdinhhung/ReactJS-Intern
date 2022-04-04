import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Cocktails.css';
import Navbar from './components/Navbar';
import { AppProvider } from './context';
import About from './pages/About';
import Detail from './pages/Detail';
import Error from './pages/Error';
import Home from './pages/Home';

const Cocktails = () => {
    return (
        <AppProvider>
            <Router>
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="*" component={Error} />
                </Switch>
            </Router>
        </AppProvider>
    )
}

export default Cocktails;
