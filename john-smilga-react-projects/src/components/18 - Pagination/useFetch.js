import { useEffect, useState } from "react";
import paginate from "./utils";

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(paginate(data));
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { loading, data }
}

export default useFetch;
