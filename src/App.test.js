import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import List from './App/pages/list';
import {getList} from './App/pages/home';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import list from './App/pages/list';
configure({ adapter: new Adapter() });
const employee = {
  id: 1,
  title: 'Front end developer',
  designation: 'johndoe',
  employment_type: "fulltime"
}

describe('Main component testing', () => {
  it('renders without crashing', () => {
     shallow(<App />);
   });

   it('Should have h1 heading', function() {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('h1')).to.exist;
    });

});

describe ('<home />', () => {
  it ('contains employee job catalog', () => {
    const wrapper = mount(<a>{employee.title}</a>)
    const value = wrapper.text();
    expect(value).equal('Front end developer');
  });

  it('Employee records should have some value', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.props().list).to.not.be.null;
  });

  it('selected topic should be set to 0', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.props().selectedTopic).to.not.be.null;
  });

})


describe ('<List />', () => {

  it ('List should not be empty', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state()).to.not.be.undefined;
  });

})

