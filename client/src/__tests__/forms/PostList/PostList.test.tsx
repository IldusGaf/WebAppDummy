import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, mount } from 'enzyme';
import PostList from '../../../forms/PostList/PostList';
import * as actions from '../../../actions/posts';
import { PostType } from '../../../types/dummyAPIResponses';

// window.matchMedia = window.matchMedia || function() {
//     return {
//         matches: false,
//         addListener: function() {},
//         removeListener: function() {}
//     };
// };

jest.mock('../../../actions/posts');
// jest.mock('../../../components/PostCard/PostCard', () => () => <div className="postCard" />);
// jest.mock('../../../components/Loader/Loader', () => () => <div className="loaderWrapper" />);
// jest.mock('../../../components/Modal/Modal', () => () => <div className="modal" />);

const mockStore = configureStore([thunk]);

describe('PostList form', () => {
  test('should render posts', () => {
    const store = mockStore({
      posts: {
        postList: [
          {
            owner: {
              id: '123sfsd1',
              picture: 'some url',
              title: 'mr',
              firstName: 'Masyanya',
              lastName: 'Bukin',
            },
            publishDate: '06 December 2020 00:00',
            image: 'url',
            text: 'some text',
          },
          {
            owner: {
              id: '123sfsd2',
              picture: 'some url',
              title: 'mr',
              firstName: 'Masyanya',
              lastName: 'Bukin',
            },
            publishDate: '06 December 2020 00:00',
            image: 'url',
            text: 'some text',
          },
          {
            owner: {
              id: '123sfsd3',
              picture: 'some url',
              title: 'mr',
              firstName: 'Masyanya',
              lastName: 'Bukin',
            },
            publishDate: '06 December 2020 00:00',
            image: 'url',
            text: 'some text',
          },
        ] as Array<PostType>,
        loading: false,
        error: ""
      },
    });
    const wrapper = render(<PostList store={store} />);
    expect(wrapper.find('.postCard')).toHaveLength(4);
  });

  test('should render loading', () => {
    const store = mockStore({
      posts: {
        postList: [] as Array<PostType>,
        loading: true,
        error: '',
        page: 0,
        limit: 6,
        total: 0,
      },
    });
    const wrapper = render(<PostList store={store} />);
    expect(wrapper.find('div.loader')).toHaveLength(1);
  });

  test('should call loading action', () => {
    const store = mockStore({
      posts: {
        postList: [
          {
            owner: {
              id: '123sfsd1',
              picture: 'some url',
              title: 'mr',
              firstName: 'Masyanya',
              lastName: 'Bukin',
            },
            publishDate: '06 December 2020 00:00',
            image: 'url',
            text: 'some text',
          }
        ] as Array<PostType>,
        loading: false,
        error: '',
        page: 1,
        limit: 6,
      },
    });
    store.dispatch = jest.fn();
    mount(<PostList store={store} />);
    expect(actions.load).toBeCalledWith(0, 6, undefined);
  });

  test('should open modal', () => {
    const store = mockStore({
      posts: {
        postList: [
          {
            owner: {
              id: '123sfsd1',
              picture: 'some url',
              title: 'mr',
              firstName: 'Masyanya',
              lastName: 'Bukin',
            },
            publishDate: '06 December 2020 00:00',
            image: 'url',
            text: 'some text',
          }],
        loading: false,
      },
    });
    const wrapper = render(<PostList store={store} />);
    expect(wrapper.find('.modal')).toHaveLength(0);
  });
});
