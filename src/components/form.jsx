import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  FormText,
  Col,
} from "reactstrap";

class Forms extends Component {
  state = {
    city: null,
  };

  handleSubmit = (event) => {
    // ... get form data
    // ... submit to an API
    event.preventDefault();
    console.log(this.state.city);
  };
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ 
        [event.target.name]:event.target.value
  })};

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
