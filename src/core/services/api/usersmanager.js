import http from '../interceptor'


export const getUserlist  = async () => {
    try {
       
        const result = await http.get('/User/UserMannage') 
    
        return result
 
     } catch (error) {
        
        return []
 
     }
}