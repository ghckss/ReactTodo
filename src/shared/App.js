import React, { Component } from 'react';
import TodoApp from '../containers/TodoApp';
import Menu from '../components/menu/Menu';
import Header from '../components/header/Header';
import { Home, Etc } from '../pages';
import { Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
    render(){
        return(
            <div className='app'>
                <div className='header-container'>
                    <Header/>
                    <Menu/>
                </div>
                <div className='contents-container'>
                    <Route exact path='/' component={Home}/>
                    <Route path='/todo' component={TodoApp}/>
                    <Route path='/etc' component={Etc}/>
                </div>
            </div>
        )
    }
}

export default App;