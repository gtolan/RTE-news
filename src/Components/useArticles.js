import { useDispatch } from 'react-redux';
import news from '../mockNewsApi';
const url = 'https://newsapi.org/v2/top-headlines?country=ie&apiKey=2781df46bd1641a8bf05d22a40ddd0e9';


const useArticles = () => {
    const dispatch = useDispatch();

    const fetchArticles = async () => {

        // const response = await fetch(url);
        // const { articles } = await response.json();
        const articles = news;
        const noImages = [];
        console.log(articles)
        console.log(JSON.stringify(articles))
        const articleSort = (art) => {
            return (art.urlToImage ? 
            art : (noImages.push(art)))
        }
        const hasImages = articles.filter(articleSort)
console.log(noImages,hasImages)
        dispatch({type:'addArticlesWithImages', payload:hasImages})
        dispatch({type:'addArticlesWithoutImages', payload:noImages})
    }

    return { fetchArticles };
}

export default useArticles