import React, {Component} from 'react';

import './App.css';
import TodoList from './TodoList';
import TodoItems from "./TodoItems";

class App extends Component {

    inputElement = React.createRef();

    constructor() {
        super();
        this.state = {
            items: [],
            currentItem: {text: '', key: ''}
        }
    }

    handleInputHandler = e => {
        const itemText = e.target.value;
        const currentItem = {text: itemText, key: Date.now()};
        this.setState({currentItem});
    };

    addItemHandler = e => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== '') {
            console.log('new item');
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: {text: '', key: ''}
            })
        }
    };

    deleteItemHandler = key => {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        });
        this.setState({
            items: filteredItems
        })
    };

    render() {
        return (
            <div className="App">
                <TodoList
                    addItem={this.addItemHandler}
                    inputElement={this.inputElement}
                    handleInput={this.handleInputHandler}
                    currentItem={this.state.currentItem}
                />
                <TodoItems entries={this.state.items} deleteItem={this.deleteItemHandler}/>
            </div>
        );
    }
}

export default App;
