import { FC, useReducer } from 'react';
import {  uiReducer ,  UIContext} from './index';

export interface  UIState {
  sideMenuOpen: boolean
}

const INITIAL_STATE:  UIState = {
  sideMenuOpen: false,
}

interface  UIProviderProps {
  children: JSX.Element
}

export const  UIProvider : FC< UIProviderProps> = ({children}) =>{

const [state, dispatch] = useReducer( uiReducer, INITIAL_STATE);

const openSideMenu = () => {
  dispatch({
    type: 'UI - Open Sidebar',
  })
}

const closeSideMenu = () => {
  dispatch({
    type: 'UI - Close Sidebar',
  })
}

  return(
    < UIContext.Provider value={{
      ...state,
      closeSideMenu,
      openSideMenu,
    }}>
      {children}
    </ UIContext.Provider>
  )
}