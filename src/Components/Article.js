import { useHistory, useParams } from 'react-router-dom'

//...



const Article = () => {

    const { title } = useParams()

    return (
        <div>
                Welcome {title}
        </div>
    )
}

export default Article
