import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/testUtils';
import Congrats from './Congrats';

const defaultProps = { success: false } //setting the default props for every component instance

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this group
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
   const setupProps = {...defaultProps, ...props} // ...if props are passed in, they will override the default props.
   return shallow(<Congrats {...setupProps} />)
}

test('renders without error', () => { 
   const wrapper = setup({ success: false }); //set up wrapper
   const component = findByTestAttr(wrapper, 'component-congrats'); //find component node
   expect(component.length).toBe(1);
});
test('renders no text when `success` prop is false', () => {
   const wrapper = setup({ success: false });
   const component = findByTestAttr(wrapper, 'component-congrats');
   expect(component.text()).toBe('');
});
test('renders non-empty congrats message when `success` prop is true', () => {
   const wrapper = setup({ success: true });
   const message = findByTestAttr(wrapper, 'congrats-message');
   expect(message.text().length).not.toBe(0)
}); 
test('does not throw warning with expected props', () => {
   const expectedProps = { success: false };
   checkProps(Congrats, expectedProps); //the assertion for this test is in the checkProps function
})