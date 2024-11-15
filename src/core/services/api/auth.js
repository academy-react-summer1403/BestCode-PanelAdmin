import http from '../interceptor'

export const loginAPI = async (user) => {
    try {
      const response = await http.post('/Sign/Login', user
      )
      console.log(response)
      return response;
    } catch (error) {
        console.log(error)
        return []
         
    }
}