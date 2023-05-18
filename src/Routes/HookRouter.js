import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Header/Header';
import UseContextHook from '../Hooks/UseContextHook';
import UseContextHookTwo from '../Hooks/UseContextHookTwo';
import UseEffectHook from '../Hooks/UseEffectHook';
import UseMemoHook from '../Hooks/UseMemoHook';
import UseRefHook from '../Hooks/UseRefHook';
import UseStateHook from '../Hooks/UseStateHook';
import UseRefHookExp from '../Hooks/UseRefHookExp';


// Footercom
// Headercom
export default function HookRouter() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
            <Route exact path="/"  element={<UseStateHook/>} />
            <Route exact path="/use-state-hook"  element={<UseStateHook/>} />
            <Route exact path="/use-effect-hook"  element={<UseEffectHook/>} />
            <Route exact path="/use-memo-hook"  element={<UseMemoHook/>} />
            <Route exact path="/use-ref-hook"  element={<UseRefHook/>} />
            <Route exact path="/use-context-hook"  element={<UseContextHook/>} />
            <Route exact path="/use-context-hook-two"  element={<UseContextHookTwo/>} />
            <Route exact path="/use-ref-example"  element={<UseRefHookExp/>} />

        </Routes>
      </Router>
    </>
  )
}

