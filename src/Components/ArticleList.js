import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useArticles from './useArticles';

const ArticleList = () => {
    const articles = useSelector(state => state.articles)
    const { fetchArticles } = useArticles()

    useEffect(() => {
        fetchArticles()
    }, [articles])

    if(articles.length === 0) return null;
    
    return (
        <>
        {articles.map(article => (
            <article>
                Welcome {article}
            </article>
        ))
        }
        </>
    )
}

export default ArticleList;
