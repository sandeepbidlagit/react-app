import React from 'react';
import './styles/Works.scss';
import seo1 from './assets/seo_img1.jpg';
import seo2 from './assets/seo_img2.jpg';
import seo3 from './assets/seo_img3.jpg';
import seo4 from './assets/seo_img4.jpg';
import seo5 from './assets/seo_img5.jpg';
import seo6 from './assets/seo_img6.jpg';


export default function Works() {
  return (
  <div className='container'>
   <div className="works" id='works'>
    <h1>Portfolio</h1>
    <div className="works__section">

      <div className="cards">
        <img src={seo1} alt="" />
       <a href='https://www.vinsol.com/' target="_blank" rel="noopener noreferrer"> <button>See Works</button></a>
      </div>

      <div className="cards">
        <img src={seo2} alt="" />
       <a href='https://www.swagmagic.com/' target="_blank" rel="noopener noreferrer"> <button>See Works</button></a>
      </div>

      <div className="cards">
        <img src={seo3} alt="" />
       <a href='https://www.snackmagic.com/' target="_blank" rel="noopener noreferrer"> <button>See Works</button></a>
      </div>

      <div className="cards">
        <img src={seo4} alt="" />
       <a href='https://www.superiordishes.com/' target="_blank" rel="noopener noreferrer"> <button>See Works</button></a>
      </div>

      <div className="cards">
        <img src={seo5} alt="" />
        <button>See Works</button>
        <a href='https://www.sakshemit.com/' target="_blank" rel="noopener noreferrer"> <button>See Works</button></a>
      </div>

      <div className="cards">
        <img src={seo6} alt="" />
        <a href='https://www.n2rtechnologies.com/' target="_blank" rel="noopener noreferrer"> <button>See Works</button></a>
        
      </div>


    </div>
   </div>

   </div>

  )
}
