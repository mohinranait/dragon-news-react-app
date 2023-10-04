import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);

   useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const result = await res.json();
            setData(result);
        }
        fetchData();
   },[url])

   return {data};
};

export default useFetch;