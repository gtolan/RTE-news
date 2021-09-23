import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useArticles from './useArticles';

const ArticleList = () => {
    
    const { fetchArticles } = useArticles();
    const articles = useSelector(state => {
            console.log(state.art, "AT")
        
       return state.art.articlesWithImages});

    useEffect(() => {
        console.log('use eff fetch')
        fetchArticles()
    }, [])

    if(articles.length === 0) return null;

    return (
        <>
        {articles.map(article => (
            <article>
                <div className="card-image">
                    <img src={article.urlToImage} alt={article.title} />
                </div>    
                <div className="article-body">
                    {article.title}
                </div>
            </article>
        ))
        }
        </>
    )
}

export default ArticleList;
