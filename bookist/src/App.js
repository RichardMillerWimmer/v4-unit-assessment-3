import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Shelf from './Components/Shelf';
import SearchBar from './Components/SearchBar'
import BookList from './Components/BookList';
import data from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: data,
      shelf: []

    }
    this.addToShelf = this.addToShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
  }

  // console.log(this.state.data)
  addToShelf(selectedBook) {
    let addingBookArr = this.state.shelf
    addingBookArr.push(selectedBook)
    this.setState({ shelf: addingBookArr })

  }

  // clearShelf() {
  //   this.setState({ shelf: [] })
  // }

  filterBooks() {

  }

  reset() {
    this.setState({})
  }

  render() {
    return (
      <div className="App" >

        <Header />
        <SearchBar filterBooks={this.filterBooks} />
        <Shelf self={this.state.shelf} clearShelf={this.clearShelf} />
        <BookList addToShelf={this.addToShelf} books={this.state.books} />
      </div>
    );
  }
}

export default App;
