import React from 'react'
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import {Classwork, Homework, TestPage} from '../pages'
import './style.css'

export const Navigation = () => {

    return <BrowserRouter>
        <nav className = 'navbar'>
            <Link to = '/classwork'>Classwork</Link>
            <Link to = '/test'>Reduce</Link>
            <Link to = '/homework'>Homework</Link>           
        </nav>
        <Switch>
            <Route path = '/classwork' component = {Classwork}/>
            <Route path = '/test' component = {TestPage}/>
            <Route path = '/homework' component = {Homework}/>
        </Switch>
    </BrowserRouter>
}