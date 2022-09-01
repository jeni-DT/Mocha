import 'jsdom-global/register';
import React from 'react';
import { configure, mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import { assert } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Login from '../Login';
configure({
  adapter: new Adapter(),
});

describe("Testing <App/> Component", () => {
  it("App renders a message", () => {
    const wrapper = shallow(<App />);
    const message = <p>Hi! this is Mocha testcase</p>;
    expect(wrapper).to.contain(message)
 
  });
  chai.use(chaiEnzyme());
});

describe('Testing <Login> Component', () => {
  it('Testing form elemements', () => {
    const login = shallow(<Login />);
    const button1 = login.find('.log-btn');
    expect(button1.text()).to.be.eql('LogIn');
    const email = login.find('#email');
    expect(email.type()).to.be.eql('input');
    expect(email.getElement().props.type).to.be.eql('email');
    const password = login.find('#password');
    expect(password.type()).to.be.eql('input');
    expect(password.getElement().props.type).to.be.eql('password');
  });
  chai.use(chaiEnzyme());
});
