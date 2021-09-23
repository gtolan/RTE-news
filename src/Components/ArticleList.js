import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useArticles from './useArticles';
import '../styles/Articles.scss';




const ArticleList = () => {
    
    const { fetchArticles } = useArticles();
    const articlesWithImages = useSelector(state => state.art.articlesWithImages);
    const articlesWithoutImages = useSelector(state => state.art.articlesWithoutImages);


    useEffect(() => {
        console.log('use eff fetch')
        fetchArticles()
    }, [])

    const WithImages = () =>{
        return (
            <section className="articles-with-images">
                {articlesWithImages.map((article, id) => {
                return (id !== 0) ? 
                (<article key={article.title}>
                    <div className="card-image">
                        <img src={article.urlToImage} alt={article.title} />
                    </div>    
                    <div className="article-body">
                        {article.title}
                    </div>
                </article>) :
                null
                
            }
            )}
            </section>)
    }
    const WithoutImages = () => {
        return (articlesWithoutImages.map(article => (
            <article className="without-images"> 
                <div className="article-body">
                    {article.title}
                </div>
            </article>
        )))
    }

    const HeadlineArticle = () => {
        return (
            <article>
                <div className="card-image">
                    <img src={articlesWithImages[0].urlToImage} alt={articlesWithImages[0].title} />
                </div>    
                <div className="article-body">
                    {articlesWithImages[0].title}
                </div>
            </article>
        )
    }

    if(articlesWithImages.length === 0) return null;

    return (
        <>
        <div className="headline-article">
            <HeadlineArticle/>
            <div className="headline-shortcuts">
                <WithoutImages />
            </div>
        </div>
        <WithImages />
        
        </>
    )
}

export default ArticleList;
