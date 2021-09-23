import React from 'react'
import ArticleList from './ArticleList'
import RTEPlayer from './RTEPlayer';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const navMenuOpen = useSelector(state => state.navbar.navMenuOpen)

    return (
        <div className={`main-body ${navMenuOpen ? 'page-opacity' : ''}`}>
                <ArticleList />
                <RTEPlayer />
        </div>
    )
}

export default HomePage;
