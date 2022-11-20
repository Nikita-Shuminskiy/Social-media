import { addPost, deletePost, ProfileReducer } from '../ProfileReducer';
import { PostType } from '../React_Redux_StoreType/types/StateType';

let initialState: any
beforeEach(() => {
    initialState = {
        postData: [
            {
                id: '1',
                message: 'helo how are you',
                likesCount: 12,
                img: 'https://cdn5.vectorstock.com/i/1000x1000/65/59/hacker-with-computer-avatar-character-vector-14776559.jpg',
            },
            {
                id: '2',
                message: 'Im learnin to React, React my first life)',
                likesCount: 12,
                img: 'https://cdn5.vectorstock.com/i/1000x1000/65/59/hacker-with-computer-avatar-character-vector-14776559.jpg',
            },
        ],
        proFileHeader: {
            headerImg: {
                img: 'https://image.freepik.com/free-photo/the-color-and-beauty-of-the-sky-at-sunset_51141-13.jpg',
            },
        },
        profileUsers: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: ''
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: null,
            photos: {
                small: '',
                large: ''
            }
        },
        status:'',
    }
})


test('Delete post', () => {

    const action = deletePost('1')

    const endState = ProfileReducer(initialState, action)

    expect(endState).toEqual({
        postData: [
            {
                id: '2',
                message: 'Im learnin to React, React my first life)',
                likesCount: 12,
                img: 'https://cdn5.vectorstock.com/i/1000x1000/65/59/hacker-with-computer-avatar-character-vector-14776559.jpg',
            },
        ],
        proFileHeader: {
            headerImg: {
                img: 'https://image.freepik.com/free-photo/the-color-and-beauty-of-the-sky-at-sunset_51141-13.jpg',
            },
        },
        profileUsers: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: ''
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: null,
            photos: {
                small: '',
                large: ''
            }
        },
        status:'',
    })
})
test('Add post', () => {

    const action = addPost('New Post')

    const endState = ProfileReducer(initialState, action)

    expect(endState.postData.length).toBe(3)
    expect(endState.postData[2].message).toBe('New Post')
})