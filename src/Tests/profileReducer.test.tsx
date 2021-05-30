import profileReducer, {addPostAC, setStatus} from "../redux/profileReducer";

let state = {
    posts: [{message: "Hi", like: 1},
        {message: "Whats up?", like: 1},
        {message: "Learn Pituhon(((", like: -13},
        {message: "LOSEEER", like: 187},
        {message: "Соси пинчер", like: 100}],
    userProfile: null,
    isAuth: false,
    status: ""
}
it('new post should be added', () => {
        let action = addPostAC("JS")
        let newState = profileReducer(state, action)
        expect(newState.posts.length).toBe(6)
        expect(newState.posts[5].message).toBe("JS")
    }
);
it('status should change', () => {
    let action = setStatus('Я знаю тесты))')
    let newState = profileReducer(state, action)
    expect(newState.status).toBe('Я знаю тесты))')
})
