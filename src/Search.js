import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'

class Search extends Component {
  state = {
    results: [],
    query: ''
  }

  updateQueryAndResults = (query) => {
    this.setState({ query })
    this.searchResults(query)
  }

  searchResults = (query) => {
    if (!query) {
      this.setState({ results: [] })
    } else {
      BooksAPI.search(query).then( results => {
        if (results && !results.error) {
          this.setState({ results })
        } else {
          this.setState({ results: [] })
        }
      })
    }
  }

  render() {
    const { results, query } = this.state
    const defaultCover = "http://i12.photobucket.com/albums/a232/djtecneek407/Webp.net-resizeimage%201_zpspmdgra8r.jpg"

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Back</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQueryAndResults(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <div className="bookshelf-books">
                {results.length > 0 &&
                  <ol className="books-grid">
                    {results.map( book => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks ? book.imageLinks.smallThumbnail : defaultCover)}` }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search

