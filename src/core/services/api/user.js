import http from '../interceptor'

export const getProfile = async (user) => {
    try {
        const response = await http.get('/SharePanel/GetProfileInfo')
        console.log(response)
        return response;
    } catch(error) {
        return false
    }
}

export const EditProfileFunc = async (user) => {
    try {
      
        const data = new FormData();
        const keys = Object.keys(user)
        keys.forEach((key) => {
            const item = user[keys]
            data.append(key,item);
        })

        console.log(data)
        
        const response = await http.put('/SharePanel/UpdateProfileInfo', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });

        return response;
    } catch (error) {
        console.error("Error updating profile:", error);
        return false;
    }
};