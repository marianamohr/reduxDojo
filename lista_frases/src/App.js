import React from 'react';
import Form from './components/Form'
import Table from './components/Table'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Table />
      </div>
    );
  }
}

export default App;
