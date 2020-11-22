import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { postData } from '../../posts';


const PostCard = () => {

    return (
     <Fragment>   
         {postData.map( (post) => 
             <div className="post-card">
             <header className="post-card__header">
                 <h2 className="post-card__header__title">
                     <Link to={`/post/${post.id}`}>
                         {post.title}
                     </Link>
                 </h2>
 
                 <div className="post-card__header__meta">
                     <span className="post-card__header__meta__posted-on">{post.published_date} </span>
                     <span className="post-card__header__meta__posted-by">
                         by {post.published_by}
                     </span>
                 </div>
             </header>
 
             <div className="post-card__image" >
                 <Link to="/post">
                 <img src={post.image} alt="picture image" className="post-image"
                 />
                 </Link>
             </div>
 
             <div className="post-card__summary">
                 <p>
                 {post.content.substring(0, 450)}
                  ...{' '}
                 <Link to="/single-post">Read More</Link>
                 </p>
             </div>
 
             <footer className="post-card__footer">
                 <p><i className="fas fa-folder"></i><span> {post.category}</span></p>
                 <p><i className="fas fa-tags"></i><span>{post.tags}</span></p>
                 <p><i className="fas fa-comments"></i><span> Comments</span></p>
             </footer>
         </div>
         )}
    </Fragment> 
    )
}

export default PostCard;
