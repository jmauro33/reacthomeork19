import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";
import Table from "./Table";

class EmployeeContainer extends Component {
  state = {
    result: {},
    search: ""
  };

 
  componentDidMount() {
    //this.searchEmployees("");
    API.search().then((results)=>{
      console.log(results);
     this.setState({ result: results.data });
      
    }).catch(err => console.log(err));
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

 
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Table employees = {this.state.result}/>
            <Card
              heading={this.state.result.Title || "Search for Employee to Begin"}
            >
              {this.state.result.Title ? (
                <EmployeeDetail

                  name={this.state.result.Name}
                  email={this.state.result.Email}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeContainer;
