import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

const EmployeeCatalog = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
max-width: 1170px;
margin: auto;
`;
const Errormessage = styled.h4`
color:red;
font-size:1em
`;

const EmployeeHeading = styled.h1`
margin:3% 0;
text-transform:uppercase;
color:#daa520;
font-weight: bold;
letter-spacing: 3px;
text-shadow: 1px 2px 3px #000;
`;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      selectedTopic: 0
    };
    this.handleSelectEmployee = this.handleSelectEmployee.bind(this);

  }

  handleSelectEmployee = (val) => {
    this.props.handleSelectEmployee({
      list: this.state.list,
      selectedTopic: val
    });

  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();

  }


  // // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getList')
      .then(res => res.json())
      .then(data => this.setState({ list: data }))
  }



  render() {
    const { list } = this.state;



    return (
      <div className="App">
        <EmployeeHeading>Employee catalog</EmployeeHeading>
        <div id="employeecatalog">
          {list.length ? (
            <EmployeeCatalog>

              {/* Render the list of items */}
              {list.map((item, index) => {
                return (
                  <Link to={'./list'} key={index} id={item.id} className="EmployeeList" onClick={() => this.handleSelectEmployee(item.id)}>
                    {item.title}
                  </Link>
                );
              })}
            </EmployeeCatalog>
          ) : (
              <div>
                <Errormessage>No Employee details Found</Errormessage>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectEmployee: (data) => {
      dispatch({ state: data, type: "displayrecords" })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);