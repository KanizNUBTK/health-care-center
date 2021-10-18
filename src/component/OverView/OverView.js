import React from 'react';
import './OverView.css';
import img1 from '../../image/img1.jpg';
import img2 from '../../image/img2.jpg';
import img3 from '../../image/img3.jpg';
import img4 from '../../image/img4.jpg';
import img5 from '../../image/img5.jpg';
import img6 from '../../image/img6.jpg';
import img7 from '../../image/img7.jpg';
import img8 from '../../image/img8.jpg';
import img9 from '../../image/img9.jpg';

const OverView = () => {
    return (
        <div>
            <h1 className="header-text">Inner View of Our Hospital</h1>
            <div className="inner-view">
                <div className="single-view">
                    <div><img src={img1} alt="" /></div>
                    <div><h3>Reception</h3></div>
                </div>
                <div className="single-view">
                    <div><h3>Cabin for patient</h3></div>
                    <div><img src={img2} alt="" /></div>
                </div>
                <div className="single-view">
                    <div><img src={img3} alt="" /></div>
                    <div><h3>Pediatrics department</h3></div>
                </div>
                <div className="single-view">
                    <div><h3>Cardiovascular department</h3></div>
                    <div><img src={img4} alt="" /></div>
                </div>
                <div className="single-view">
                    <div><img src={img5} alt="" /></div>
                    <div><h3>Neurosurgery department</h3></div>
                </div>
                <div className="single-view">
                    <div><h3>Cancer Center</h3></div>
                    <div><img src={img6} alt="" /></div>
                </div>
                <div className="single-view">
                    <div><img src={img7} alt="" /></div>
                    <div><h3>Radiology department</h3></div>
                </div>
                <div className="single-view">
                    <div><h3>Surgery department</h3></div>
                    <div><img src={img8} alt="" /></div>
                </div>
                <div className="single-view">
                    <div><h3>Canteen in our Hospital</h3></div>
                    <div><img src={img9} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default OverView;