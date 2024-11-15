import http from '../interceptor'


export const registerLevel1 = async (user) => {
    try {
       
       const result = await http.post('/Sign/SendVerifyMessage',user
      ) 
   
      return result

    } catch (error) {
       
       console.log('test',error)
       return []

    }

}

export const registerLevel2 = async (user) => {
   try {
      const result = await http.post('/Sign/VerifyMessage',user
     ) 
     alert('Success')
      return result

   } catch (error) {
      
      console.log('test',error)
      return []

   }

}

export const registerLevel3 = async (user) => {
   try {
      const result = await http.post('/Sign/Register',user) 
      alert('Success')
      return result

   } catch (error) {
      
      console.log('test',error)
      return []

   }

}