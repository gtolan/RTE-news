import { useDispatch } from 'react-redux';

const url = 'https://newsapi.org/v2/top-headlines?country=ie&apiKey=2781df46bd1641a8bf05d22a40ddd0e9';


const useArticles = () => {
    const dispatch = useDispatch();

    const fetchArticles = async () => {
        const response = await fetch(url);
        const responseArticles = await response.json();
        return dispatch({type:'addArticles', payload:responseArticles})
    }

    return { fetchArticles };
}

export default useArticles