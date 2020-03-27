export const isAuthenticated = () => {
    if(localStorage.getItem('token')){
        return true;
    }else{
        return false;
    }
}
