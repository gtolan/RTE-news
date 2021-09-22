import { useHistory, useParams } from 'react-router-dom'

//...


const ArticlePage = () => {

    const { title } = useParams()

    return (
        <div>
                {`${title} Page title`}
        </div>
    )
}

export default ArticlePage
