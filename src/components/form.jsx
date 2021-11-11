// create a main component and lift up the state to that component
// create protected routes for card
// fetch api request
// as for now just the api request remember you have installed react-router-dom
// read about componentDidMount
// make sure to use async and await (Learn asynchronous programming today)
// extract all the value and display them on a Card
// lift up the state
// make all error co

import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

class Forms extends Component {
  state = {
    city: null,
    temperature: null,
    weather_descriptions: null,
    weather_icons: null,
    location: null,
  };

  handleSubmit = (event) => {
    // ... get form data
    // ... submit to an API
    event.preventDefault();
    console.log(this.state.city);

    const baseurl = "http://api.weatherstack.com/current";
    const url = `${baseurl}?access_key=${process.env.REACT_APP_API_KEY}&query=${this.state.city}`;

  componentDidMount(){
      fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
        }

        response.json().then((data) => {
          if (data.error) {
            console.log("Something went wrong. Check if city name is valid");
          }
          console.log(data);
          this.setState({ temperature: data.current.temperature });
          this.setState({
            weather_descriptions: data.current.weather_descriptions[0],
          });
          this.setState({ location: data.request.query });
          this.setState({ weather_icons: data.current.weather_icons[0] });

          // Uncomment this
          console.log(this.state.temperature);
          console.log(this.state.weather_descriptions);
          console.log(this.state.weather_icons);
        });
      })
      .catch((err) => {
        console.log("Fetch Error: ", err);
      });
    return;
  };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  handleDisplay = () => {
    if (this.state.weather_icons !== null) {
      return (
        <div className="container">
          <div className="col-12 col-md-9">
            <Card>
              <CardImg
                top
                width="100%"
                height="100%"
                src={this.state.weather_icons}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{this.state.city}</CardTitle>
                <CardSubtitle tag="h6">{this.state.location}</CardSubtitle>
                <CardText>
                  Weather in C: {this.state.temperature}
                  <br />
                  Description: {this.state.weather_descriptions}
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    } else {
      <div>
        <h6>LOADING...</h6>
      </div>;
    }
  };

  componentDidMount() {}

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
        <br />
        <div className="container">
          <div className="col-12 col-md-9">{this.handleDisplay()}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Forms;
