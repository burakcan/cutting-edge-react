import React from 'react';
import Counter from 'components/Counter';
import { mount } from 'enzyme';

describe('Counter component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      count: 42,
      increment: function() {},
      decrement: function() {},
      reset: function() {},
    };

    spyOn(props, 'increment');
    spyOn(props, 'decrement');
    spyOn(props, 'reset');

    wrapper = mount(
      <Counter
        count={ props.count }
        reset={ props.reset }
        increment={ props.increment }
        decrement={ props.decrement }
      />
    );
  });

  it('Should show value', () => {
    expect(wrapper.contains(
      <div className="value">
        { props.count }
      </div>
    )).toBe(true);
  });

  it('Should call increment when increment button clicked', () => {
    wrapper.find('button.increment').simulate('click');
    expect(props.increment).toHaveBeenCalled();
  });

  it('Should call decrement when decrement button clicked', () => {
    wrapper.find('button.decrement').simulate('click');
    expect(props.decrement).toHaveBeenCalled();
  });

  it('Should call reset when reset button clicked', () => {
    wrapper.find('button.reset').simulate('click');
    expect(props.reset).toHaveBeenCalled();
  });
});
