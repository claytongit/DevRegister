export const isAuthenticated = () => {
    if(localStorage.getItem('token')){
        return true;
    }else{
        return false;
    }
}

//localStore.setIntem(response.data.token);

/*
const token = localStore.getItem('token');
api.get('/', {
    headers: {
        Authorization: `Bearer ${token}`,
    }
});

*/
