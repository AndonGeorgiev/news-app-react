const baseUrl = 'http://localhost:4000';



    

export const login = async (loginData) => {
    let res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.err;
    }
};

export const register = async (loginData) => {
    let res = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.err;
    }
};

export const isLoggedIn =  () => {
    return localStorage.getItem('userId')
};

export const isReader =  () => {
   let role =  localStorage.getItem('role');
   if(role === 'reader'){
    return true
   }
    
};

export const userInfo = () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const role = localStorage.getItem('role');
    const email = localStorage.getItem('email');

    let userData = {
        token,
        userId,
        role,
        email
    }
    
    return userData;

}


//users/profile/:id


export const getUser = async (id) => {
    let res = await fetch(`${baseUrl}/users/profile/` + id);

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.err;
    }
};