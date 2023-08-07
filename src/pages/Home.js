import React from 'react';
import useFetch from '../useFetch.js';
import '../css/posts.css';
import Ads from '../Ads.js';
    
export default function Home() {

    const posts = useFetch('posts');

    return (
        <div className="home">
            <div className='main-section'>
                {posts && posts.slice(0, 1).map((post, index) => (

                <a href='/post' target='_blank' rel="noopener noreferrer">
                    <div className='main-post' item xs={4} key={index}>
                        <img className='image' alt='#' src={JSON.stringify(post.yoast_head_json.og_image[0].url).slice(1,-1)} />

                        <div className=''>
                            <div className='title' dangerouslySetInnerHTML={{__html: post.title.rendered}}></div>
                            <div className='excerpt' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                        </div>
                    </div>
                </a>

                )) }
            </div>

            <div className='first-section' container spacing={2}>
                {posts && posts.slice(1, 9).map((post, index) => (

                <a href={JSON.stringify(post.link).slice(1,-1)} target='_blank' rel="noopener noreferrer">
                    <div className='post' item xs={4} key={index}>
                        <img className='image' alt='#' src={JSON.stringify(post.yoast_head_json.og_image[0].url).slice(1,-1)} />
                        <div className='title' dangerouslySetInnerHTML={{__html: post.title.rendered}}></div>
                    </div>
                </a>

                )) }
            </div>

            <div className='second-section' container spacing={2}>
                <div>
                    {posts && posts.slice(7, 10).map((post, index) => (

                    <a href={JSON.stringify(post.link).slice(1,-1)} target='_blank' rel="noopener noreferrer">
                        <div className='post' item xs={4} key={index}>
                            <img className='image' alt='#' src={JSON.stringify(post.yoast_head_json.og_image[0].url).slice(1,-1)} />
                            <div className='title' dangerouslySetInnerHTML={{__html: post.title.rendered}}></div>        
                        </div>
                    </a>

                    )) }
                </div>
                
                <Ads />
            </div>
        </div>
    );
}