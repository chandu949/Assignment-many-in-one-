import React, { Component } from 'react';
import './Colors.css'

class Love extends Component {
    render() {
        return (
            <div className= "make">
                <div>
                      <img src="https://images.news18.com/ibnlive/uploads/2020/11/1605258504_untitled-design.jpg?" alt=  "Kong"/>
                         <p>Love</p>
                </div>

                <div>
                    <img src= "https://www.pexels.com/photo/man-and-woman-kissing-holding-dog-with-leash-2055236/.jpg"  alt="Hong"/>
                    <p>Kiss</p>
                </div>

                <div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
				<p className="legend">Hong Kong</p>
			</div>

			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore"/>
				<p className="legend"></p>
              </div>
                
            </div>
        );
    }
}

export default Love;