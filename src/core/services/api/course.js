import { baseUrl } from '../../../config';
import http from '../interceptor'

export const getCourseList = async (count) => {
        try {
          const result = await http.get(
            `/Home/GetCoursesTop?${count}`,
         );
  
          return result
          
        } catch (error) {
            return []
        }
};

export const getCourseList1 = async (card )  => {

  try {

    const result = await http.get(
      '/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0',
   );
   console.log(result);
   return result;
  
  }catch (error) {
    return []
  }
}