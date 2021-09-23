import { useSelector } from 'react-redux';
import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeadlinesNavbar = React.memo(() => {

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
})

export default HeadlinesNavbar;
