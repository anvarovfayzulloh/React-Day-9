import { useEffect, useState } from "react";
import axios from "../api/axios";

const useFetch = (URL, searchText = '') => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const searchURL = searchText ? `${URL}/search?q=${encodeURIComponent(searchText)}` : URL;
                const response = await axios.get(searchURL);
                setData(response.data.recipes || response.data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
                setData(null);
            }
        };

        loadData();
    }, [URL, searchText]);

    return { data };
};

export { useFetch };
