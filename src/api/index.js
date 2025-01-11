import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-key': '654e230f1dmshfa2fc273e7a3693p1647bdjsn9491b91a6fda',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getRouteData = async (start, end) => {
    try {
        const { data } = await axios.get('https://api.maptoolkit.com/v1/routing', {
            params: {
                start: `${start.lat},${start.lng}`,
                end: `${end.lat},${end.lng}`,
                mode: 'bike' // or 'bike', 'foot' depending on your requirement
            },
            headers: {
                'x-rapidapi-key': '654e230f1dmshfa2fc273e7a3693p1647bdjsn9491b91a6fda',
                'x-rapidapi-host': 'api.maptoolkit.com'
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}