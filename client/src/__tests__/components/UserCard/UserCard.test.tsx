import React from 'react';
import { shallow } from 'enzyme';
import { UserCard } from '../../../components/UserCard/UserCard';

describe('UserCard component', () => {
  test('should render component', () => {
    const wrapper = shallow(<UserCard />);
    expect(wrapper.find('div.userCard')).toHaveLength(1);
  });

  test('snapshot test', () => {
    const wrapper = shallow(<UserCard />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render data', () => {
    const id = '216544654697498';
    const title = 'mr';
    const firstName = 'James';
    const lastName = 'Bond';
    const picture = 'pictureUrl';
    const wrapper = shallow(<UserCard
      title={title}
      firstName={firstName}
      lastName={lastName}
      picture={picture}
      id={id}
    />);
    expect(wrapper.find('span.userCard__userName').text()).toBe(`${title}. ${firstName} ${lastName}`);
    expect(wrapper.find('img.userCard__image').prop('src')).toBe(picture);
  });
});
