const initState = {
    userName:'',
    email:'',
    age:0
}
export default (state = initState, action) => {
    switch (action.type){
        case 'success':
            return {

                userName:action.userName
            }
        case 'injectEmail':
            return {
                email:action.email
            }
        case 'injectAge':
            return {
                age:action.age
            }
        default:
            return initState
    }
}