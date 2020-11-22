import React, {Fragment} from 'react';
import Sidebar from '../components/layout/Sidebar';

const SinglePost = () => {
    return (
    <div className="homeContent">   
        <div className="homeContent__main post-card">

            <div className="post-card__image" >
                <img src="https://images.pexels.com/photos/4007310/pexels-photo-4007310.jpeg?cs=srgb&dl=pexels-alex-azabache-4007310.jpg&fm=jpg" alt="picture image" className="post-image"
                />
            </div>

            <header className="post-card__header my-2">
                <h2 className="post-card__header__title large">
                    TITLE Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium voluptatem deserunt blanditiis.
                </h2>

                <div className="post-card__header__meta">
                    <span className="post-card__header__meta__posted-on">1999-11-09 </span>
                    <span className="post-card__header__meta__posted-by">
                        by Vraja
                    </span>
                </div>
            </header>

            <div className="post-card__summary">
                <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita amet rem omnis voluptates necessitatibus praesentium autem eaque laboriosam. Autem accusamus neque sint voluptates hic perspiciatis placeat harum praesentium asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sunt dolores fugit ratione tempore excepturi sed maiores qui temporibus sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores labore vitae consectetur, eveniet quos distinctio, modi dicta dolorem ratione harum corrupti natus est nihil delectus totam rem accusamus inventore repellat ab cupiditate debitis. Assumenda sequi explicabo tenetur? Dolore beatae atque recusandae nesciunt, id eligendi suscipit praesentium nihil repellendus dicta? Magni earum itaque, nobis odio amet quod, nulla tempora accusamus illo minima cumque culpa voluptates officiis distinctio provident soluta quam consequuntur! Sit iusto voluptatem magni a tempora beatae minus cum. Quis ad odit facilis quas doloribus sapiente unde cumque mollitia aut laudantium fugit quia tempore, dolor quaerat officiis possimus eos quisquam?
                </p>
            </div>

            <footer className="post-card__footer">
                <p><i class="fas fa-folder"></i><span> Folder</span></p>
                <p><i class="fas fa-tags"></i><span>Tags</span></p>
                <p><i class="fas fa-comments"></i><span> Comments</span></p>
            </footer>
        </div>
        <Sidebar />
    </div>
    )
}

export default SinglePost;
