import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Musick from './components/Musick/Musick';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs';
import { StoreType } from './Redux/state';

type AppType = {
    store: StoreType
    /*newMessage:string
    addPost: (m:string) => void*/
}

function App(props: AppType) {
    const state = props.store.getState
    return (
        <div className={'app-wrapper'}>
            <Header
                img={'https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg'}
                alt={'logo'}/>
            <NavBar state={props.store.getState()}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'}
                       render={() => <Dialogs newMessage={props.store._state.dialogPage.newMessage}
                                              dispatch={props.store.dispatch.bind(props.store)}
                                              store={props.store.getState().dialogPage}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile
                           newValue={props.store.getState().profilePage.newValue}
                           dispatch={props.store.dispatch.bind(props.store)}
                           profilePage={props.store.getState().profilePage}/>}/>
            </div>
            <Settings/>
        </div>
    );
}

export default App;
