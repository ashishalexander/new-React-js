import axios from 'axios';

const searchImages = async (term)=>{
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID m9E-OuvpWh2sOqkCvpEYYKe_fGWiVYxb5a8DmvhofoQ',
        },
        params: {
            query:term,

        },
    });
    
    return response.data.results
};

export default searchImages;