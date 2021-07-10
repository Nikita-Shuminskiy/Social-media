import React from 'react';
import { DataUsersTye, UserType } from '../../Redux/UsersReducer';

export type UsersType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (user: UserType[]) => void
    users:UserType[]
}

const Users = (props: UsersType) => {
  if(props.users.length === 0) {
      props.setUsers([
          {
           id: 1,
           followed: true,
           status: 'helo how are you',
           imgLogo: 'https://pbs.twimg.com/profile_images/1138180619731705864/SauQVg5u.jpg',
           name: 'nick',
           country: {
               title: 'USA',
               city: 'New-York'
           }
       },
       {
           id: 2, followed: true,
           status: 'helo how are you',
           imgLogo: 'https://pbs.twimg.com/profile_images/1138180619731705864/SauQVg5u.jpg',
           name: 'niaaack',
           country: {
               title: 'USA',
               city: 'Nexxaw-York'
           }

       },
       {
           id: 3,
           followed: false,
           status: 'helo how a1212121re you',
           imgLogo: 'https://pbs.twimg.com/profile_images/1138180619731705864/SauQVg5u.jpg',
           name: 'nicsdsk',
           country: {
               title: 'USdddddA',
               city: 'New-aaaaYork'
           }

       },
      ]
      )
  }
    return (
        <div>
           {props.users.map(u => {
            return (<div key={u.id}>
                <div>
                    <div>
                        <img style={{width: '60px'}} src={u.imgLogo} alt="121"/>
                        {u.followed ?  <button onClick={() => props.unFollow(u.id)} style={{width: '60px', height: '50px'}}  >UnFollowed</button>: <button onClick={() => props.follow(u.id)} style={{width: '60px', height: '50px'}}>Followed</button> }
                    </div>
                    <div><span>
                                 {u.name}
                         </span>
                        <span>
                                 {u.status}
                             </span>
                        <span>
                          <p>{u.country.title}</p>
                          <p>{u.country.city}</p>
                         </span>
                    </div>
                </div>
            </div>)
        })
        }
        </div>

    );
};

export default Users;