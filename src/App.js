import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Table from 'terra-table';
import axios from 'axios';
var data = [];
var review = [];
var data1 = [{ "name": "b", "id": "1" }, { "name": "d", "id": "2" }]
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      bookData: {},
      error: ''
    }

  }

  componentDidMount() {
    console.log("akhildm")
    axios.get('https://anapioficeandfire.com/api/books')
      .then(json => console.log(data1))
  }
  componentWillMount() {
    console.log("akhilwm")
    axios.get('https://anapioficeandfire.com/api/books')
      .then(json => this.setState({ data: json.data }))
  }

  clickHandler(id) {
    console.log(id)
    console.log("cl")
  }
  handleClick(e,a, p) {
    console.log(e);
    axios.get(e)
      .then(json => console.log(json))
    var url = 'http://localhost:3001/' + a;
    axios.get(url)
      .then(json => console.log(json))


  }
  render() {
    const items = data.map(book => <li>{book.name}</li>);
    console.log("==================")
    console.log(this.state.data);
    var bookTable = (<Table isStriped={false}>
      <Table.Header>
        <Table.HeaderCell content="Book No" key="NAME" minWidth="small" />
        <Table.HeaderCell content="Name" key="ADDRESS" minWidth="medium" />
        <Table.HeaderCell content="Pages" key="PHONE_NUMBER" minWidth="large" />
        <Table.HeaderCell content="publisher" key="publisher" minWidth="large" />
      </Table.Header>

      <Table.Rows>
        {
          this.state.data.map((book) => {
            return (
              <Table.Row key={book.isbn}>
                <Table.Cell content={book.isbn} key="isbn" onClick={this.handleClick.bind(this, book.isbn,book.url)} />
                <Table.Cell content={book.name} key="name" />
                <Table.Cell content={book.numberOfPages} key="numberOfPages" />
                <Table.Cell content={book.publisher} key="publisher" />
              </Table.Row>
            )
          })
        }
      </Table.Rows>
    </Table>);
    var reviewTable = '';
    return (
      <div>
        <header >

          {bookTable}
        </header>
      </div>
    );
  }
}

export default App;
