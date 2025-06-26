import React, { useState,useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import  CounterContext from './store/index';
function App() {
 
  return (
    <ConfigProvider locale={zhCN}>
        <CounterContext.Provider value={{'name':'123'}}>
      
        </CounterContext.Provider>
    </ConfigProvider>
  );
}

export default App;
