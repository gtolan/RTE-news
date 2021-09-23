import { useHistory, useParams } from 'react-router-dom'

//...
import { useLocation } from 'react-router-dom';


const ArticlePage = ({props}) => {

    const location = useLocation();
    const articleData = location.state;

    return (
        <div className="article-page">
             <div className="article-title">
                   <h4>{articleData.title}</h4>     
            </div>
            
            {articleData.urlToImage && (
            <div className="article-image">
                <img src={articleData.urlToImage} alt={articleData.title} />
            </div>)}

             <div className="article-content">
                {articleData.description}
            </div>
           
            
         



        </div>
    )
}

export default ArticlePage
