import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

const App = () => {
    console.log('components app');
    return <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer />
    </div>
};
export default App