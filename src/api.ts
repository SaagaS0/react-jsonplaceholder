import axios from 'axios'
const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});


export const api = {
    getAll: async () => {
        let response = await request('/albums')
        return response.data
    },
    getAllId: async (id: string) => {
        let response = await request(`/albums/${id}`)
        return response.data
    },
    getPhotosFromAlbum: async (id: string) => {
        let response = await request(`/albums/${id}/photos`);
        return response.data;
    },
    getPhoto: async (id: string) => {
        let response = await request(`/photos/${id}`);
        return response.data;
    }


    
         
}

// getAllId: async (id: string) => {
//     let response = await axios.get(`${ALBUMS}/${id}`)
//     return response.data
// }