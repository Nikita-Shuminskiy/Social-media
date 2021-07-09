import React from 'react';
import { SidBarType } from './React_Redux_StoreType/types/StateType';

const initialState:SidBarType = {
    friendsPage: [
        {img: 'https://mir-avatarok.3dn.ru/_si/0/92302704.jpg', name: 'Nastya', alt: 'qwq' , id:1},
        {img: 'https://mir-avatarok.3dn.ru/_si/0/92302704.jpg', name: 'Vivaldi', alt: 'qwzxq' , id:2},
        {img: 'https://mir-avatarok.3dn.ru/_si/0/92302704.jpg', name: 'Nana', alt: 'qwe' , id:3},
    ]
}
export const sideBarReducer = (state:SidBarType = initialState):SidBarType => {
 return state
};
