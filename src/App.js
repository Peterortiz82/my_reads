import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AddBook from './AddBook'
import BookShelf from './BookShelf'
// import { Link } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {}

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <AddBook />
        )}/>
        <Route exact path="/" render={() => (
          <BookShelf />
        )}/>
      </div>
    )
  }
}

export default BooksApp
