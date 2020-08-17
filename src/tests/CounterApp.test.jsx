import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Tests in <CounterApp />', () => {

    //Global wrapper
    let wrapper = shallow(<CounterApp />);
    
    beforeEach( () => {
        //Reiniciar el componente en cada ejecucion
        wrapper = shallow(<CounterApp />);
    
    });
    
    test('should show <CounterApp /> correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    });
    
    test('default value should be 100', () => {
        
        const val = 100;
        const wrapper = shallow( 
            <CounterApp 
                value = {val}
            /> 
        );
        
        const value = wrapper.find('h2').text().trim();
        
        expect( value ).toBe( val.toString() );
    });

    test('should increment with +1 button', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const value = wrapper.find("h2").text().trim();
        expect( value ).toBe( '11' );
    });
    
    test('should decrement with -1 button', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const value = wrapper.find("h2").text().trim();
        expect( value ).toBe( '9' );
    });
    
    test('should reset to default value with reset button', () => {

        const wrapper = shallow( 
            <CounterApp 
                value = {105}
            /> 
        );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const value = wrapper.find("h2").text().trim();
        expect( value ).toBe( '105' );
    });
    
});