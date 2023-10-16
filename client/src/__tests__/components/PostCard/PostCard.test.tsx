import React from 'react';
import { shallow } from 'enzyme';
import { PostCard } from '../../../components/PostCard/PostCard';

describe('PostCard component test', () => {
  test('should render PostCard', () => {
    const wrapper = shallow(<PostCard image="" text="" owner={{ firstName: '', lastName: '' }} publishDate="" />);
    expect(wrapper.find('div.postCard')).toHaveLength(1);
  });

  test('should render data', () => {
    const title = 'mr';
    const firstName = 'James';
    const lastName = 'Bond';
    const publishDate = '12.06.2020';
    const text = 'Blah-blah-blah';
    const picture = 'pictureUrl';
    const wrapper = shallow(<PostCard
      owner={{ firstName, lastName, picture }}
      publishDate={publishDate}
      text={text}
      image={picture}
    />);
    expect(wrapper.find('span.postCard__userName').text()).toBe(`${firstName} ${lastName}`);
    expect(wrapper.find('span.postCard__userDate').text()).toBe('06 December 2020 00:00');
    expect(wrapper.find('span.postCard__desc').text()).toBe(text);
  });

  test('snapshot test', () => {
    const wrapper = shallow(<PostCard image="" text="" owner={{ firstName: '', lastName: '', picture: '' }} publishDate="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
