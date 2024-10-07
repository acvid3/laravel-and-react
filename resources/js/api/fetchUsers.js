import axios from 'axios';

export const fetchFilterUsers = async (name) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/filter-users', {
            name,
        });
        return response.data.data;
    } catch (error) {
        return { error: 'Error fetching filtered users:' + error };
    }
};
