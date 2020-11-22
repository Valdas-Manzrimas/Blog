import React from 'react';
import { postData } from '../../posts';

const Sidebar = () => {
    return (
        <div className="homeContent__side">
                <div className="sidebar-cont">
                    <input type="text" placeholder="Search..."/>
                </div>

                <div className="sidebar-cont my-1 follow">
                    <h3>Please follow & like us :)</h3>
                    <div>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter-square"></i>
                    </div>
                </div>
                
                <div className="sidebar-cont">
                    <div className="sidebar-cont__sidePost">
                        {postData.map( (post) => 
                            <div className="sidebar-cont__sidePost__post">
                                <img src={post.image} alt="*"/>
                                <span>{post.title.substring(0, 40)}</span>
                            </div>
                        )}
                    </div>
                </div>

                
        </div>
    )
}

export default Sidebar
