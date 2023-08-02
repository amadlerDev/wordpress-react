import useFetch from './useFetch.js';
import './css/posts.css'
    
export default function Posts() {

    const posts = useFetch('posts');

    return (
        <div className="home">
            <div className='first-section' container spacing={2}>
                {posts && posts.slice(0, 8).map((post, index) => (
                <div className='post' item xs={4} key={index}>
                    <div className='title' dangerouslySetInnerHTML={{__html: post.title.rendered}}></div>
                        
                    <img className='image' src={JSON.stringify(post.yoast_head_json.og_image[0].url).slice(1,-1)} />
                </div>
                )) }
            </div>

            <div className='second-section' container spacing={2}>
                {posts && posts.slice(2, 10).map((post, index) => (
                <div className='post' item xs={4} key={index}>
                    <div className='title' dangerouslySetInnerHTML={{__html: post.title.rendered}}></div>
                        
                    <img className='image' src={JSON.stringify(post.yoast_head_json.og_image[0].url).slice(1,-1)} />
                </div>
                )) }
            </div>
        </div>
    );
}