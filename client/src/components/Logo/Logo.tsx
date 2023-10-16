import { CameraOutlined } from '@ant-design/icons';
import React from 'react';
import styless from './Logo.module.scss';

function Logo() {
  return (
    <div className={styless.logo}>
      <div className={styless.logo__img}>
        <CameraOutlined style={{ fontSize: '30px' }} />
      </div>
      <span className={styless.logo__desc}>Delta World</span>
    </div>
  );
}

export default Logo;
