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
    this.clearShelf = this.clearShelf.bind(this)
    this.reset = this.reset.bind(this)
  }

  // console.log(this.state.data)
  addToShelf(selectedBook) {
    let addingBookArr = this.state.shelf
    addingBookArr.push(selectedBook)
    let bookSet = new Set(addingBookArr)
    addingBookArr = [...bookSet]
    this.setState({ shelf: addingBookArr })
  }

  clearShelf() {
    this.setState({ shelf: [] })
  }

  filterBooks(userInput) {
    console.log(userInput)

    let filteredBooks = []
    this.state.books.filter((elem) => {
      let elemTitle = elem.title.toLocaleLowerCase()
      let elemAuthor = elem.author.toLocaleLowerCase()
      if (elemTitle.includes(userInput) || elemAuthor.includes(userInput)) {
        return filteredBooks.push(elem)
      }
    })
    console.log(filteredBooks)
    console.log()
    this.setState({ books: filteredBooks })
  }

  reset() {
    this.setState({ books: data })
  }

  render() {
    return (
      <div className="App" >

        <Header />
        <SearchBar filterBooks={this.filterBooks} reset={this.reset} books={this.state.books} />
        <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
        <BookList addToShelf={this.addToShelf} books={this.state.books} />
      </div>
    );
  }
}

export default App;
