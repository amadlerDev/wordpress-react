import { useEffect, useState } from 'react';
    
export default function useFetch(url) {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadData() {
            const response = await fetch('https://www.makorrishon.co.il/wp-json/wp/v2/' + url);
            if(!response.ok) {
                // oups! something went wrong
                console.log('oups! something went wrong')
                return;
            }
    
            const posts = await response.json();
            setData(posts);
        }
    
        loadData();
    }, [url]);

    return data;
}