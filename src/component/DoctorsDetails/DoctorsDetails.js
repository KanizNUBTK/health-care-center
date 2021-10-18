import React from 'react';
import './DoctorsDetails.css';
import doc1 from '../../image/Dr-Naresh-Trehan.jpg';
import doc2 from '../../image/Dr-SudhansuBhatacharya.jpg';
import doc3 from '../../image/Dr-William.png';
import doc4 from '../../image/Dr.-A.-Reese-Abright.png';
import doc5 from '../../image/DR.-CORRIE-T.M-ANDERSON.jpg';
import doc6 from '../../image/Dr.-Khalid.png';
import doc7 from '../../image/DR.-MARK.-F.-AARON.jpg';
import doc8 from '../../image/DR.-MONA-M.-ABAZA.jpg';
import doc9 from '../../image/Dr.-Myles.-B.-Abbot.png';

const DoctoresDetails = () => {
    return (
        <>
            <h1>Meet our Doctors</h1>
            <div className="doctors-details">
                <div className="single-details">
                   <div>
                   <img src={doc1} alt="" />
                   </div>
                   <div>
                       <h3> Dr. Naresh Trehan</h3>
                       <p>Dr. Naresh is a famous Indian cardiovascular and cardiothoracic surgeon.</p>
                   </div>
                </div>
                <div className="single-details">
                   <div>
                   <img src={doc2} alt="" />
                   </div>
                   <div>
                       <h3> Dr. Sudhansu Bhattacharyya, MBBS, MS, MCH</h3>
                       <p>Dr. Sudhansu is also one of the best Indian Cardiovascular Surgeons.</p>
                   </div>
                </div>
                <div className="single-details">
                   <div>
                   <img src={doc3} alt="" />
                   </div>
                   <div>
                       <h3>Dr. William A. Abdu, M.D, M.S.</h3>
                       <p>Dr. Abdu is an Associate Professor of Orthopedics and of The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center</p>
                   </div>
                </div>
                <div className="single-details">
                   <div>
                   <img src={doc4} alt="" />
                   </div>
                   <div>
                       <h3>Dr. Arthur Reese Abright, M.D.</h3>
                       <p>Dr. Reese is also one of the best doctors of Psychiatry.</p>
                   </div>
                </div>
                <div className="single-details">
                   <div>
                   <img src={doc5} alt="" />
                   </div>
                   <div>
                       <h3>Dr. Corrie T.M Anderson, M.D.</h3>
                       <p>Dr. Anderson is also one of the best doctors in Pediatric Anesthesiologist around the world.</p>
                   </div>
                </div>
                <div className="single-details">
                   <div>
                   <img src={doc6} alt="" />
                   </div>
                   <div>
                       <h3> Dr. Khalid Abbed, M.D.</h3>
                       <p>Dr. Khalid is a famous doctor of Neuro. He is an Associate Professor and Chief of the Spine Section in the Department of Neurosurgery.</p>
                   </div>
                </div>
                <div className="single-details">
                   <div>
                   <img src={doc7} alt="" />
                   </div>
                   <div>
                       <h3> Dr. Mark. F. Aaron, M.D.</h3>
                       <p>Dr. Aaron is also one of the best doctors in cardiologists. His specialization is Cardiovascular Disease. </p>
                   </div>
                </div>
                <div className="single-details">
                   <div>
                   <img src={doc8} alt="" />
                   </div>
                   <div>
                       <h3> Dr.Mona.M.Abaza, M.D.</h3>
                       <p>Dr. Abaza is a specialized doctor in ENT Otolaryngologist, Adenoidectomy, esophagoscopy, Nasal airway surgery, and tracheostomy.</p>
                   </div>
                </div>
                <div className="single-details">
                   <div>
                   <img src={doc9} alt="" />
                   </div>
                   <div>
                       <h3>Dr. Myles. B. Abbott, M.D.</h3>
                       <p>Dr. Myles is also one of the best-known doctors of Pediatricians in the world. </p>
                   </div>
                </div>
            </div>
        </>
    );
};

export default DoctoresDetails;