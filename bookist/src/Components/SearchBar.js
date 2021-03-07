
import React, { Component } from "react";

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    handleChange(value) {
        this.setState({ userInput: value })
        // console.log(this.state.userInput)
    }

    handleClick(currentUserInput) {
        this.props.filterBooks(currentUserInput)
        this.setState({ userInput: '' })
        console.log(this.state.userInput)
    }

    handleClear() {
        this.setState({ userInput: '' })
        this.props.reset()
        // console.log(this.state.userInput)
    }


    render() {
        console.log(this.state.userInput)
        // let currentUserInput = this.state.userInput

        return (
            <section>
                {/* <h4 className='searchBar'>Search Bar</h4> */}
                <div className='inputRow'>
                    <input className='input' placeholder='search for books' value={this.state.userInput} onChange={event => this.handleChange(event.target.value)}></input>
                    <button className='btn' onClick={() => this.handleClick(this.state.userInput)}>search</button>
                    <button className='btn' onClick={() => this.handleClear()}>clear search</button>
                </div>
            </section>
        )
    }
};

export default SearchBar