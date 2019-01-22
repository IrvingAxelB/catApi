import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Search } from '../components/Search';

Enzyme.configure({ adapter: new Adapter() });

function setup(newProps) {
  const props = Object.assign({}, {
    imageObj: {},
    isLoading: true,
    category: 1,
    breed: '',
    mime_types: '',
    dispatch: jest.fn()
  }, newProps);

  const enzymeWrapper = shallow(<Search {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Search', () => {
    it('should render loading UI', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('div').text()).toBe('Loading...')
    });

    it('should render loading Try Again IU', () => {
      const { enzymeWrapper } = setup({
        isLoading: false,
        imageObj: undefined,
      });
      expect(enzymeWrapper.find('div').text()).toBe('Nothing Found.<WithStyles(Button) />');
    });
  })
});
