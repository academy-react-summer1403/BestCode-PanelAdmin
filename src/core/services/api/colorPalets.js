import http from '../interceptor';
import toast from 'react-hot-toast';


export const PostColorpalet = async ( color ) => {
    
        const result = await http.post(
            `/SiteSetting/AddColorPalet?ColorPallet=${color}`,
            
        );
        console.log("API Response:", result);
        return result;
    
        
};