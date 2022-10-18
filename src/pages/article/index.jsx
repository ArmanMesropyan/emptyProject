import React from 'react';
import dungeonImg from '../../assets/img/dungeon.jpg'
import './style.scss'

const Article = () => {
    return (
        <div className='L-article' style={{backgroundImage: `url("${dungeonImg}")`}}>
            <div className='L-main-article-content'>
                <h2 className="L-main-article-title">To be Continued</h2>
                <p className="L-main-article-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eaque earum eum ex necessitatibus
                    odit officiis pariatur quidem rem sint? Accusantium eius, fugit itaque iusto modi pariatur tenetur
                    totam vel vero voluptate!</p>
            </div>
            <div className="L-copy">
                © WebDesign Master
            </div>
        </div>
    );
};

export default Article;
