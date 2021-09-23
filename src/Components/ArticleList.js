import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useArticles from './useArticles';
import '../styles/Articles.scss';
import { Link } from 'react-router-dom';



const ArticleList = () => {
    
    const { fetchArticles } = useArticles();
    const articlesWithImages = useSelector(state => state.art.articlesWithImages);
    const articlesWithoutImages = useSelector(state => state.art.articlesWithoutImages);


    useEffect(() => {
        console.log('use eff fetch')
        fetchArticles()
    }, [])

    const formatURL = title => (`article/${title.split(' ').join('-')}`)


    const WithImages = () =>{
        return (
            <section className="articles-with-images">
               
                {articlesWithImages.map((article, id) => {
                return (id !== 0) ? 
                ( <Link className="article-link" key={article.title} to={{
                        pathname: formatURL(article.title), 
                        state: article
                        }} >
                            <article key={article.title}>
                                <div className="card-image">
                                    <img src={article.urlToImage} alt={article.title} />
                                </div>    
                                <div className="article-body">
                                    {article.title}
                                </div>
                            </article></Link> ) :
                            null
            }
          )}
            </section>)
    }

    const WithoutImages = () => {
        return (articlesWithoutImages.map(article => (
            <Link className="article-link" key={article.title} to={{
                        pathname: formatURL(article.title), 
                        state: article
                        }} >
            <article className="without-images" > 
                <div className="article-body">
                    {article.title}
                </div>
            </article>
            </Link>
        )))
    }

    const HeadlineArticle = () => {
        return (<Link className="article-link" to={{
                        pathname: formatURL(articlesWithImages[0].title), 
                        state: articlesWithImages[0]
                        }} >
            <article>
                <div className="card-image">
                    <img src={articlesWithImages[0].urlToImage} alt={articlesWithImages[0].title} />
                </div>    
                <div className="article-body">
                    {articlesWithImages[0].title}
                </div>
            </article>
            </Link>
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
