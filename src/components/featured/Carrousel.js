import React from 'react';
import Slider from 'react-slick';

import photo2 from '../../resources/images/Photo2.jpg';
import photo4 from '../../resources/images/Photo4.jpg';
import photo5 from '../../resources/images/Photo5.jpg';

const Carrousel = () => {

    const settings ={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500
    }
    return (
        <div
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                 overflow:'hidden'

            }}
        >
            <Slider {...settings}>

                <div>
                   <div className="carrousel_image"
                        style={{
                            background:`url(${photo5})`,
                            height:`${window.innerHeight}px`
                        }}
                   >

                   </div>
                </div>
                <div>
                <div className="carrousel_image"
                style={{
                    background:`url(${photo2})`,
                    height:`${window.innerHeight}px`
                }}
           >

           </div>
                </div>
                <div>
                <div className="carrousel_image"
                style={{
                    background:`url(${photo4})`,
                    height:`${window.innerHeight}px`
                }}
           >

           </div>
                </div>

            </Slider>
        </div>
    );
};

export default Carrousel;