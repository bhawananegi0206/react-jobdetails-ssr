import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const EmployeeWrapper = styled.div`
    max-width:800px;
    margin:auto;
 `;
const Errormessage = styled.h4`
    color:red;
    font-size:1em
  `;
const TextLabel = styled.span`
    color:#262626;
    font-size:1em;
  `;

const EmployeeHeading = styled.h1`
 margin:3% 0;
 text-transform:uppercase;
 color:#daa520;
 font-weight: bold;
 letter-spacing: 3px;
 text-shadow: 1px 2px 3px #000;
`;
const EmployeeLink = styled.div`
   background-color: transparent;
   color: #d2691e;
   font-weight: 600;
   padding: 5px 9px;
   text-transform: capitalize;
   font-size: 1.5em;
   margin-left: 20px;
   text-align:left
 `;
class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }


  render() {
    const { list } = this.props;

    return (
      <div className="App">
        <Link to={'./'} className="BackBtn">Back</Link>
        <EmployeeHeading>Job details </EmployeeHeading>

        {list.length ? (
          <EmployeeWrapper>
            <EmployeeLink>
              <TextLabel>Job Title:</TextLabel> {list[0].title}
            </EmployeeLink>
            <EmployeeLink >
              <TextLabel>Job description:</TextLabel> {list[0].description}
            </EmployeeLink>
            <EmployeeLink>
              <TextLabel>Job Employment type:</TextLabel> {list[0].employment_type}
            </EmployeeLink>
          </EmployeeWrapper>
        ) : (
            <EmployeeWrapper>
              <Errormessage>No Employee details Found</Errormessage>
            </EmployeeWrapper>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps)(List);