import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import AppContainer from 'containers/App';
import AppLayout from 'components/AppLayout';
import configureStore from 'configureStore';

describe("AppContainer", () => {
  const store = configureStore({
    rootReducer: () => ({}),
    initialState: {},
    sagas: [],
  });

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={ store }>
        <AppContainer>
          <div className="TEST" />
        </AppContainer>
      </Provider>
    );
  });

  it("Should render given component into AppLayout component", () => {
    expect(wrapper.contains(
      <AppLayout>
        <div className="TEST" />
      </AppLayout>
    )).toBe(true);
  });
});
