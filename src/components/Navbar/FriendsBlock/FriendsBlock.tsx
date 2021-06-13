import React from 'react';
import s from './friendsBlock.module.css'
import Friends from './Friends/Friends';
import { stateType } from '../../../Redux/state';

type friendsBlockType = {
    title:string
    state: stateType

}


const FriendsBlock= (props:friendsBlockType) => {

    let FriendsElementAdd = props.state.friendsPage.sidebar.map(e => <Friends img={e.img} alt={e.alt} name={e.name}/>)
    return (
        <div>
            <h1>{props.title}</h1>
            {FriendsElementAdd}
        </div>
    );
};

export default FriendsBlock;