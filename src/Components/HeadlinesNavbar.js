import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../GlobalState';
import { Link } from 'react-router-dom'

const HeadlinesNavbar = () => {

    // const [navHeadLines, setNavHeadlines] = useState([])
    const { headLines } = useContext(GlobalContext);
    useEffect(() => {
        console.log(headLines, 'headLines')

    }, [headLines])

    const generateKey = () => {
        return `nav+${ new Date().getTime() }`;
    }

    const openCategory = () => {

    }
    
    // const [headLines, setHeadLines] = useState([]);
    if(headLines.length == 0) return null;

    return (
        <nav className="headlines-categories">
            {headLines.map(title => {
                <Link to="/${title}" onClick={openCategory(title)} key={generateKey()}>{title}</Link>
            })}
            <h1>Headlines {headLines}</h1>
        </nav>
    )
}

export default HeadlinesNavbar;
