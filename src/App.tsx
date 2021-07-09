import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Musick from './components/Musick/Musick';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs';
import { ActionsTypes, StateType} from './Redux/store';
import { StoreType } from './Redux/store';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

type AppType = {
    state: StateType
    dispatch:(action:ActionsTypes) => void
    store:StoreType

}

function App(props: AppType) {
  /*  const state = props.state.getState()*/
    return (
        <div className={'app-wrapper'}>
            <Header
                img={'https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg'}
                alt={'logo'}/>
            <NavBar state={props.state.sideBar}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer newMessage={props.state.dialogPage.newMessage}
                                              dispatch={props.dispatch.bind(props.state)}
                                              store={props.state.dialogPage}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile
                           store={props.store} />}/>
            </div>
            <Settings/>
        </div>
    );
}

export default App;
