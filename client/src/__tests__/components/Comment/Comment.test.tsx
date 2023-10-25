import React from 'react';
import { shallow } from 'enzyme';
import { Comment } from '../../../components/Comment/Comment';

describe('Comment component test', () => {
  test('should render comment', () => {
    const wrapper = shallow(<Comment message="" owner={{ firstName: '', lastName: '', picture: '' }} publishDate="" />);
    expect(wrapper.find('div.comment')).toHaveLength(1);
  });

  test('should render data', () => {
    const title = 'mr';
    const firstName = 'James';
    const lastName = 'Bond';
    const publishDate = '06 December 2020 00:00';
    const text = 'Blah-blah-blah';
    const wrapper = shallow(<Comment
      owner={{ firstName, lastName, picture: '' }}
      publishDate={publishDate}
      message={text}
    />);
    expect(wrapper.find('span.comment__userName').text()).toBe(`${firstName} ${lastName}`);
    expect(wrapper.find('span.comment__userDate').text()).toBe(publishDate);
    expect(wrapper.find('span.comment__desc').text()).toBe(text);
  });

  test('snapshot test', () => {
    const wrapper = shallow(<Comment message="" owner={{ firstName: '', lastName: '', picture: '' }} publishDate="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
