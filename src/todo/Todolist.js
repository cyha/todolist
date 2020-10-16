import React, { Component } from 'react';


class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }


    //AJOUTER LA CHOSE A FAIRE
    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    //SUPPRIMER
    supprimerTodo(item) {
        
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }


    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item d-flex justify-content-center" key={item}>
                    {item}  <button onClick={this.supprimerTodo.bind(this, item)} className="btn-danger ml-3 border-0 rounded"><i class="fas fa-trash m-1 mt-2 mb-2"></i></button>
                </div>    
            );
        });
    }

    render() {
        return(
            <div>
                <h1 align="center">Ma Todo list</h1>
                <div>
                <form className="ml-5 form-row align-items-center row container d-flex justify-content-center">
                    <input value={this.state.userInput} type="text" placeholder="Renseigner un item" onChange={this.onChange.bind(this)} className="form-control mr-3 align-center col-3"/>
                    <button onClick={this.addTodo.bind(this)} className="btn btn-primary col-3">Ajouter</button>
                </form>
                </div>
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;