import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

const HeadlinesNavbar = () => {

    const headlines = useSelector(state => state.navbar.headlines);
    const generateKey = () => {
        return Math.floor(Math.random() * 5000) + 1;
    }
    
    if(headlines.length == 0) return null;

    return (
        <nav className="headlines-categories">
            {headlines.map(({title}) => (
                <Link className="headline-news-category" to={`/articles/${title}`} key={generateKey()}>{title}</Link>
            ))}
        </nav>
    )
}

//React.memo(

export default HeadlinesNavbar;
