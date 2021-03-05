
import React, { Component } from "react";

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }

    handleChange(value) {
        this.setState({ userInput: value })
    }

    handleClick(userInput) {
        this.props.filterBooks(userInput)
        this.setState({ userInput: '' })
    }

    handleClear() {
        this.setState({ userInput: '' })
    }


    render() {
        return (
            <section>
                <h4>Search Bar</h4>
                <div>
                    <input placeholder='search for books' onChange={event => this.handleChange(event.target.value)}></input>
                    <button onClick={() => this.handleClick(this.state.userInput)}>search</button>
                    <button onClick={() => this.handleClear()}>clear search</button>
                </div>
            </section>
        )
    }
};

export default SearchBar