import {addPost, deletePost, InitialStateType, ProfileReducer} from '../ProfileReducer';
import {PostType} from '../React_Redux_StoreType/types/StateType';

let initialState: InitialStateType
beforeEach(() => {
    initialState = {
        postData: [],
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
            userId: null as unknown as number,
            photos: {
                small: '',
                large: ''
            }
        },
        status: '',
    }
})
test('Add post', () => {

    const action = addPost('New Pos12121t')

    const endState = ProfileReducer(initialState, action)

    expect(endState.postData.length).toBe(1)
    expect(endState.postData[0].message).toBe('New Pos12121t')
})

test('Delete post', () => {

    const action = deletePost('1')

    const endState = ProfileReducer(initialState, action)

    expect(endState).toEqual({
        postData: [],
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
        status: '',
    })
})