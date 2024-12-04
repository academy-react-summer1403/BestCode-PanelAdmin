import http from '../interceptor'
import toast from 'react-hot-toast'


export const getUserlist  = async () => {
    try {
       
        const result = await http.get('/User/UserMannage') 
    
        return result
 
     } catch (error) {
        
        return []
 
     }
}

export const filterGetuser = async (page , row) => {
   try {
      const result = await http.get(`/User/UserMannage?PageNumber=${page}&RowsOfPage=${row}`)

      return result
   } catch(err) {
        return []
   }
}

export const getUserId = async (id) => {
   try {
      const result = await http.get(`/User/UserDetails/${id}`)

      return result
   } catch(err) {
        return []
   }
}

export const getCourseId = async (id) => {
   try {
      const result = await http.get(`/Course/${id}`)

      return result
   } catch(err) {
        return []
   }
}


export const Updateuser = async () => {
   try {
      const result = await http.put('/User/UpdateUser')

      return result
   } catch(err) {
        return []
   }
}

export const Reactfilter = async () => {
   const result = await http.get('/Home/GetCoursesWithPagination?TechCount=1&ListTech=4')
   return result
}

export const Nextfilter = async () => {
   const result = await http.get('/Home/GetCoursesWithPagination?TechCount=1&ListTech=5')
   return result
}


export const FrontEndfilter = async () => {
   const result = await http.get('/Home/GetCoursesWithPagination?TechCount=1&ListTech=2')
   return result
}

export const Backendfilter = async () => {
   const result = await http.get('/Home/GetCoursesWithPagination?TechCount=1&ListTech=3')
   return result
}


export const userPanelProfile = async () => {
   const result = await http.get('/SharePanel/GetProfileInfo')
   return result
}


export const getAllCourse = async () => {
   try {
      const result = await http.get('/Course/CourseList?RowsOfPage=1000')

      return result
   } catch(err) {
        return []
   }
}

export const getfilterCourse = async (page , row) => {
   try {
      const result = await http.get(`/Course/CourseList?PageNumber=${page}&RowsOfPage=${row}`)

      return result
   } catch(err) {
        return []
   }
}

export const AddCourse = async (course) => {
   try {
      const result = await http.post('/Course', course)

      return result
   } catch(err) {
        return []
   }
}

export const getTeacher = async () => {
   try {
      const result = await http.get('/Home/GetTeachers')

      return result
   } catch(err) {
        return []
   }
}

export const DeleteUser = async (userid) => {
   console.log(userid)
   try {
      const result = await http.delete('/User/DeleteUser', userid)

      return result
   } catch(err) {
        return []
   }
}

export const GetCreateCourse = async () => {
   try{
    
    const response = await http.get(`/Course/GetCreate`)
    return response

   } catch{
    return []
   }
}


export const GetCourseUserList = async (id) => {
   try{
    
    const response = await http.get(`/CourseUser/GetCourseUserList?PageNumber=1&RowsOfPage=5&CourseId=${id}`)
    return response

   } catch{
    return []
   }
}

export const GetCoursePayments = async (id) => {
   try{
    const response = await http.get(`/CoursePayment?CourseId=${id}`)
    return response

   } catch(error){
    return []
 }
}


export const DeleteCoursePayments = async (id) => {
   try{
    const response = await http.delete(`/CoursePayment`, id)
    return response

   } catch(error){
    if(error.response.data.ErrorMessage){
       toast.error(error.response.data.ErrorMessage)
    }
    else{
       toast.error(' مشکلی پیش آمده است ')
   }
 }
}


export const AcceptCoursePayments = async (id) => {
   try{
    const response = await http.put(`/CoursePayment/Accept`, id)
    return response

   } catch(error){
    if(error.response.data.ErrorMessage){
       toast.error(error.response.data.ErrorMessage)
    }
    else{
       toast.error(' مشکلی پیش آمده است ')
   }
 }
}



export const GetGroupCourse = async (teacherId, courseId) => {
   try{
    const response = await http.get(`/CourseGroup/GetCourseGroup?TeacherId=${teacherId}&CourseId=${courseId}`)
    return response

   } catch(error){
      if(error.response.data.ErrorMessage){
         toast.error(error.response.data.ErrorMessage)
      }
   }

}


export const DeleteGroup = async (id) => {
   try{
    const response = await http.delete(`/CourseGroup`, id)
    return response

   } catch(error){
      if(error.response.data.ErrorMessage){
         toast.error(error.response.data.ErrorMessage)
      }
      else{
         toast.error(' مشکلی پیش آمده است ')
     }
   }
}


export const EditGroup = async (data) => {
   try{
    const response = await http.put(`/CourseGroup`, data)
    return response

   } catch(error){
      if(error.response.data.ErrorMessage){
         toast.error(error.response.data.ErrorMessage)
      }
      else{
         toast.error(' مشکلی پیش آمده است ')
     }
   }
}

export const AddGroup = async (data) => {
   try{
    const response = await http.post(`/CourseGroup`, data)
    return response

   } catch(error){
      if(error.response.data.ErrorMessage){
         toast.error(error.response.data.ErrorMessage)
      }
      else{
         toast.error(' مشکلی پیش آمده است ')
     }
   }
}

export const ActiveCourse = async (data) => {
   try{
    const response = await http.put(`/Course/ActiveAndDeactiveCourse`, data)
    return response

   } catch{
    return []
   }
}


export const UpdateCourse = async (formData) => {
   try{
    console.log(formData)
    const response = await http.put(`/Course`, formData)
    return response

   } catch{
    return []
   }
}

export const AddUser = async (data) => {
   try{
       const response = await http.post(`/User/CreateUser`, data)
       return response
   }
   catch(err){
       return []
   }
}


export const UpdateUser = async (data) => {
   try{
    
    const response = await http.put(`/User/UpdateUser`, data)

    return response

   } catch(err){
    return err.message
   }
}



export const GetCourseComments = async (SortType, SortingCol, Query, PageNumber, RowsOfPage, Accept, Teacher) => {
   try{
    const response = await http.get(`/Course/CommentManagment?SortingCol=${SortingCol}&SortType=${SortType}&TeacherId=${Teacher.value}&Accept=${Accept.value}&Query=${Query}&PageNumber=${PageNumber}&RowsOfPage=${RowsOfPage}`)
    return response

   } catch{
    return []
   }
}


export const AcceptCourseComment = async (id) => {
   try{
    const response = await http.post(`/Course/AcceptCourseComment?CommentCourseId=${id}`)
    return response

   } catch{
    return []
   }
}

export const RejectCourseComment = async (id) => {
   try{
    const response = await http.post(`/Course/RejectCourseComment?CommentCourseId=${id}`)
    return response

   } catch{
    return []
   }
}

export const DeleteCourseComment = async (id) => {
   try{
    const response = await http.delete(`/Course/DeleteCourseComment?CourseCommandId=${id}`)
    return response

   } catch{
    return []
   }
}

export const AddReplyCourseComment = async (data) => {
   try{
    const response = await http.post(`/Course/AddReplyCourseComment`, data)
    return response

   } catch{
    return []
   }
}

export const UpdateCourseComment = async (data) => {
   try{
    const response = await http.put(`/Course/UpdateCourseComment`, data)
    return response

   } catch{
    return []
   }
}


export const GetTotalActiveNews = async () => {
   try{
    
    const response = await http.get(`/News/AdminNewsFilterList?PageNumber=1&RowsOfPage=5&IsActive=false`)
    return response

   } catch{
    return []
   }
}

export const GetTotalNews = async () => {
   try{
    
    const response = await http.get(`/News/AdminNewsFilterList?PageNumber=1&RowsOfPage=5`)
    return response

   } catch{
    return []
   }
}

export const GetNewsList = async (RowsOfPage,PageNumber,IsActive,Query) => {
   try{
    
    const response = await http.get(`/News/AdminNewsFilterList?PageNumber=${PageNumber}&RowsOfPage=${RowsOfPage}&Query=${Query}&IsActive=${IsActive}`)
    return response

   } catch{
    return []
   }
}

const ActiveNews = async(id, Active) => {
   try{
       const formData = new FormData();
       formData.append('Active', Active)
       formData.append('Id',id)
       let response = await http.put('/News/ActiveDeactiveNews',formData)
       return response

   }catch(er){
       console.log(er)
   }
}
export default ActiveNews

export const GetRepliesCommentNews = async (id) => {
   console.log(id)
   try{
    const response = await http.get(`/News/GetAdminRepliesComments?CommentId=${id}`)
    console.log(response)
    return response

   } catch{
    return []
   }
}

export const ReplyCourseComment = async (data) => {
   try{
    const response = await http.post(`/Course/AddReplyCourseComment`, data)
    return response

   } catch{
    return []
   }
}

export const AddNewsFile = async (data) => {
   try{
       const result = await http.post(`/News/CreateNewsFile`, data)
       return result
   }
   catch(error){
       if(error.response.data.ErrorMessage){
          toast.error(error.response.data.ErrorMessage)
       }
       else{
          toast.error(' مشکلی پیش آمده است ')
      }
    }
}

export const AddReplyNewsComment = async (data) => {
   try{
    const response = await http.post(`/News/CreateNewsReplyComment`, data)
    return response

   } catch{
    return []
   }
}

export const UpdateNewsComment = async (data) => {
   try{
    const response = await http.put(`/News/UpdateNewsComment`, data)
    return response

   } catch{
    return []
   }
}

export const UpdateNewsFile = async (data) => {
   try{
       const result = await http.put(`/News/UpdateNewsFile`, data)
       return result
   }
   catch(error){
       if(error.response.data.ErrorMessage){
          toast.error(error.response.data.ErrorMessage)
       }
       else{
          toast.error(' مشکلی پیش آمده است ')
      }
    }
}

export const GetRepliesCommentCourse = async (courseId, commentId) => {
   try{
    const response = await http.get(`/Course/GetCourseReplyCommnets/${courseId}/${commentId}`)
    return response

   } catch{
    return []
   }
}

export const GetNewsById = async(id) => {
   try{
       let response = await http.get(`/News/${id}`);
       return response

   }catch(er){
       console.log(er)
   }
}

export const GetDetailUser = async (id) => {
   try{
    
    const response = await http.get(`/User/UserDetails/${id}`)
    return response

   } catch{
    return []
   }
}




// export const ActiveNews = async(id, Active) => {
//    try{
//        const formData = new FormData();
//        formData.append('Active', Active)
//        formData.append('Id',id)
//        let response = await http.put('/News/ActiveDeactiveNews',formData)
//        return response

//    }catch(er){
//        console.log(er)
//    }
// }

export const GetNewsFile = async (id) => {
   try{
       const result = await http.get(`/News/GetNewsFileList?NewsId=${id}`)
       return result
   }
   catch{
       return []
   }
}



export const DeleteNewsFile = async (id) => {
   try{
       const result = await http.delete(`/News/DeleteNewsFile?fileId=${id}`)
       return result
   }
   catch(error){
       if(error.response.data.ErrorMessage){
          toast.error(error.response.data.ErrorMessage)
       }
       else{
          toast.error(' مشکلی پیش آمده است ')
      }
    }
}

// export const UpdateNewsFile = async (data) => {
//    try{
//        const result = await http.put(`/News/UpdateNewsFile`, data)
//        return result
//    }
//    catch(error){
//        if(error.response.data.ErrorMessage){
//           toast.error(error.response.data.ErrorMessage)
//        }
//        else{
//           toast.error(' مشکلی پیش آمده است ')
//       }
//     }
// }

export const GetNewsComment = async (id) => {
   try{
    const response = await http.get(`/News/GetAdminNewsComments?NewsId=${id}`)
    return response

   } catch{
    return []
   }
}

export const GetTopNews = async () => {
   try{
    
    const response = await http.get(`/News/AdminNewsFilterList?PageNumber=1&RowsOfPage=4&SortType=DESC`)
    return response

   } catch{
    return []
   }
}

// export const AddReplyNewsComment = async (data) => {
//    try{
//     const response = await http.post(`/News/CreateNewsReplyComment`, data)
//     return response

//    } catch{
//     return []
//    }
// }

// const ActiveNews1 = async(id, Active) => {
//    try{
//        const formData = new FormData();
//        formData.append('Active', Active)
//        formData.append('Id',id)
//        let response = await http.put('/News/ActiveDeactiveNews',formData)
//        return response

//    }catch(er){
//        console.log(er)
//    }
// }
// export default ActiveNews1


export const GetCategoriesForNews = async() => {
   try{
       let response = await http.get(`/News/GetListNewsCategory`);
       return response

   }catch(er){
       console.log(er)
   }
}

export const GetProfileAdmin = async () => {
   try{
       const result = await http.get(`/SharePanel/GetProfileInfo`)
       return result
   }
   catch{
       return []
   }
}




