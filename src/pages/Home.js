import React, {Fragment} from 'react';
import styles from '../styles/style.scss';

import PostCard from '../components/posts/PostCard';
import Sidebar from '../components/layout/Sidebar';

import landPic from '../img/landing.jpg';
import landText from '../img/landing-text.png';

const Home = () => {
    return (
    <Fragment>
        <div className="land-img">
            <img src={landPic} alt="landing"/>
            <div className="text">
                <img src={landText} alt="text"/>
            </div>
        </div>

        <section className="homeContent">
            <div className="homeContent__main">
                <PostCard />
            </div>
            <Sidebar />
        </section>
    </Fragment>
    )
}

export default Home;
