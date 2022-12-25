import React from 'react';
import styless from './Main.module.scss';

function Main({ children }: any) {
  return (
    <main className={styless.main}>
      {children}
    </main>
  );
}

export default Main;
