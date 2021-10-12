import React from 'react';
import s from './friendsBlock.module.css'
import Friends from './Friends/Friends';
import { SidBarType } from '../../../Redux/React_Redux_StoreType/types/StateType';


type friendsBlockType = {
    friendsPage: SidBarType

}


const FriendsBlock= (props:friendsBlockType) => {

    let FriendsElementAdd = props.friendsPage.friendsPage.map(e => <Friends key={e.id} img={e.img} alt={e.alt} name={e.name}/>)
    return (
        <div className={s.container}>
            <h1>Friends</h1>
            {FriendsElementAdd}
        </div>
    );
};

export default FriendsBlock;