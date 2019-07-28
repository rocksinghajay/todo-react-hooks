import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoList from '../views/TodoList/TodoList'


const AppRoutes = () =>
    <Router>
        <Route exact path="/" component={TodoList} />
    </Router>

export default AppRoutes