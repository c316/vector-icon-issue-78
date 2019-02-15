import { mount } from 'enzyme';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

const wrapper = renderer.create(<App />);

describe('App should render', () => {
  expect(wrapper).toExist();
});
