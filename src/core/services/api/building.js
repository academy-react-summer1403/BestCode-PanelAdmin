import http from '../interceptor';
import toast from 'react-hot-toast';

export const GetBuildingData = async (SortType, SortingCol, Query, PageNumber = 1, RowsOfPage = 10, Accept, Building) => {
    try {
        const response = await http.get(`/Building`      
        );
        console.log(response);
        return response;
    } catch (err) {
        console.error('Error fetching building data:', err);
        toast.error('مشکلی در دریافت اطلاعات پیش آمد.');
        return [];
    }
};

export const PostActiveBuilding = async (id) => {
    try {
        const response = await http.post(`/Building/Activate`, { BuildingId: id });
        toast.success('ساختمان با موفقیت فعال شد.');
        return response.data;
    } catch (err) {
        console.error('Error activating building:', err);
        toast.error('مشکلی در فعال‌سازی ساختمان پیش آمد.');
        return [];
    }
};

export const PostDeactiveBuilding = async (id) => {
    try {
        const response = await http.post(`/Building/Deactivate`, { BuildingId: id });
        toast.success('ساختمان با موفقیت غیرفعال شد.');
        return response.data;
    } catch (err) {
        console.error('Error deactivating building:', err);
        toast.error('مشکلی در غیرفعال‌سازی ساختمان پیش آمد.');
        return [];
    }
};

export const PostCreateBuilding = async (data) => {
    try {
        const response = await http.post(`/Building`, data);
        toast.success('ساختمان با موفقیت ایجاد شد.');
        return response.data;
    } catch (err) {
        console.error('Error creating building:', err);
        toast.error('مشکلی در ایجاد ساختمان پیش آمد.');
        return [];
    }
};

export const PutUpdateBuilding = async (data) => {
    try {
        const response = await http.put(`/Building`, data);
        toast.success('ساختمان با موفقیت به‌روزرسانی شد.');
        return response.data;
    } catch (err) {
        console.error('Error updating building:', err);
        toast.error('مشکلی در به‌روزرسانی ساختمان پیش آمد.');
        return [];
    }
};
