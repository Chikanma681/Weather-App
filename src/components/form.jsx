// create a main component and lift up the state to that component
// create protected routes for cards
// fetch api request
// as for now just the api request remember you have installed react-router-dom
// use axios

import React, { Component } from "react";
import { Button, FormGroup, Form, Label, Input, Col } from "reactstrap";

class Forms extends Component {
  state = {
    city: null,
  };

  handleSubmit = (event) => {
    // ... get form data
    // ... submit to an API
    event.preventDefault();
    console.log(this.state.city);

    const baseurl = 'http://api.weatherstack.com/current';
    const url=`${baseurl}?access_key=${process.env.REACT_APP_API_KEY}&query={this.state.city}`;

    

  };

  handleInputChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="col-12 row row-content" styles={{ marginTop: 10 }}>
            <h3>Enter the city to get the forecast</h3>
          </div>
        </div>
        <div className="container">
          <div className="col-12">
            <div className="col-12 col-md-9">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Col>
                    <Label htmlFor="cityInput" md={2}>
                      City
                    </Label>
                    <br />
                    <Input
                      type="text"
                      id="cityInput"
                      name="city"
                      placeholder="City"
                      md={10}
                      required
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 10 }}>
                    <br />
                    <Button type="submit" color="primary">
                      Enter
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Forms;
