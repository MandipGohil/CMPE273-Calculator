import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import * as API from './api/API'

class App extends Component {

  state = {
        num1: '',
        num2: '',
        answer: ''
    };

    componentWillMount(){
        this.setState({
          num1: '',
          num2: '',
          answer: ''
        });
    }
// After Click on Addition this function call
    add = (userdata) => {
      console.log(userdata);
        API.adition(userdata)
            .then((result) => {
                    this.setState({
                        answer: result.answer
                    });
                });
    };

// After Click on Subtraction this function call
    sub = (userdata) => {
      console.log(userdata);
        API.subtraction(userdata)
            .then((result) => {
                    this.setState({
                        answer: result.answer
                    });
                });
    };

// After Click on Multiplication this function call
    multi = (userdata) => {
      console.log(userdata);
        API.multiplication(userdata)
            .then((result) => {
                    this.setState({
                        answer: result.answer
                    });
                });
    };

// After Click on Division this function call
    divi = (userdata) => {
      console.log(userdata);
        API.divison(userdata)
            .then((result) => {
                    this.setState({
                        answer: result.answer
                    });
                });
    };

// After Click on Reset this function call
    reset = (userdata) => {
      this.setState({
        num1: '',
        num2: '',
        answer: ''
      });
    }
 render() {
   return (
     <div className="App">
     <div className="jumbotron">


            <div className="row justify-content-md-center">
              <div className="col-md-5s">
              <div className="alert alert-info" role="alert">
                Calculator
              </div>
                  <form>
                  <div className="form-group row">
                      <label className="col-sm-5 col-form-label">Oprand 1</label>
                  <div className="cal-sm-10">
                          <input
                              className="form-control"
                              type="text"
                              label="num1"
                              name="num1"
                              placeholder="First Value"
                              value={this.state.num1}
                              onChange={(event) => {
                                  this.setState({
                                      num1: event.target.value
                                  });
                              }}
                          />
                      </div>
                    </div>

                      <div className="form-group row">
                          <label className="col-sm-5 col-form-label">Oprand 2</label>
                      <div className="cal-sm-10">
                          <input
                              className="form-control"
                              type="text"
                              label="num2"
                              name="num2"
                              placeholder="Second Value"
                              value={this.state.num2}
                              onChange={(event) => {
                                  this.setState({
                                      num2: event.target.value
                                  });
                              }}
                          />
                      </div>
                    </div>

                      <div className="form-group row">
                          <label className="col-sm-5 col-form-label">Answer</label>
                      <div className="cal-sm-10">
                          <input
                              className="form-control mb-3"
                              type="Answer"
                              label="Answer"
                              placeholder="Answer"
                              value={this.state.answer}
                          />
                      </div>
                    </div>

                      <div className="form-group">
                          <button className="btn btn-primary mr-3" type="button"
                              onClick={() => this.add(this.state)}>
                              Addition
                          </button>
                          <button className="btn btn-primary mr-3" type="button"
                              onClick={() => this.sub(this.state)}>
                              Subtraction
                          </button>
                          <button className="btn btn-primary mr-3" type="button"
                              onClick={() => this.multi(this.state)}>
                              Multiplication
                          </button>
                          <button className="btn btn-primary" type="button"
                              onClick={() => this.divi(this.state)}>
                              Divison
                          </button>
                      </div>
                      <div className="form-group">
                      <button className="btn btn-danger mr-3" type="reset"
                              onClick={() => this.reset(this.state)}>
                          Reset
                      </button>
                      </div>
                  </form>
                </div>
              </div>
          </div>
     </div>
   );
 }

}

export default App;
