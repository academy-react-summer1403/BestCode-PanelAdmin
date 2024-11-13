import { baseUrl } from '../../../config';
import http from '../interceptor'

export const getNewsCard = async () => {
        try {
          const result = await http.get('/News');
          consol.log('result:',result);
          return result;
         
          
        } catch (error) {
            return []
        }
};