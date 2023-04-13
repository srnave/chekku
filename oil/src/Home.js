import React from "react";
import './Home.css';
import Navbars from "./Navbars";
import Footer from "./Footer";
// import image1 from '../src/images/home.jpg'
import image2 from '../src/images/raw and pure.jpg'
import image3 from '../src/images/natural and organic.jpg'
import image4 from '../src/images/unfilter.jpg'
import image5 from '../src/images/coconut oil.jpg'
import image6 from '../src/images/ground nut oil.jpg'
import image7 from '../src/images/Sesame Oil.png'
import image8 from '../src/images/ghee.jpg'
import image9 from '../src/images/rkcoconut.jpg'
import image10 from '../src/images/rkgroundnut.jpg'
import image11 from '../src/images/rksesame.jpg'
import image12 from '../src/images/rkghee.jpg'
import image13 from '../src/images/rkoilcake.jpeg'
import image14 from '../src/images/Oil-cake.jpg'


function Home(){
      
    const myStyle1={
      backgroundRepeat: 'no-repeat',
      height:'500px',
      width:'500px'
  };
  const myStyle2={
    backgroundRepeat: 'no-repeat',
    height:'250px',
    width:'200px'
};
const myStyle3={
  backgroundRepeat: 'no-repeat',
  height:'200px',
  width:'200px'
};
    return(
        <>
        <div className="back">
        <center>
            <br></br>
            <div class="pic-ctn">
    <img style={myStyle1} src={image5}  class="pic"/>
    <img style={myStyle1} src={image6}  class="pic"/>
    <img style={myStyle1} src={image7}  class="pic"/>
    <img style={myStyle1} src={image8}  class="pic"/>
    <img style={myStyle1} src={image14}  class="pic"/>
  </div>
  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        
        <h1>Our Products</h1>
        <br></br>

        <p>TASTE THE FLAVOR, MISS THE FAT</p>
<br></br>
        <p>SHOP OUR PURE PRODUCTS AND ENJOY</p>

        <br></br><br></br>
        <section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img style={myStyle2} src={image9} />
      </figure>
      <div class="article-body">
        <h2>Coconut Oil</h2>
        <p>
        At RK we provide the pure and raw oil with the natural content and attributes that define quality. Our pure and raw oil promises the balanced blends of different flora from all over the nation. We have the best collection of oil with us, explore to check our collection of authentic oil. We are very assured about the Quality of Oil we provide. It is 100% Raw & Pure. Buy pure Oil !
        </p>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img  style={myStyle2} src={image10 }/>
      </figure>
      <div class="article-body">
        <h2>Groundnut Oil</h2>
        <p>
        We provide Oil with 100% Natural & Organic. Using  the natural traditional way , we produce oil, which remains as pure and pristine  itself. It can be called as Certified Organic, which remains 100 per cent natural, and creamy. Our oil is a harmonious composition of the natural and healthy , which remains befitting for all cooking purposes. Buy pure Oil!
        </p>
        
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
      <img  style={myStyle2} src={image11}/>
      </figure>
      <div class="article-body">
        <h2>Sesame Oil</h2>
        <p>
        We make Oil and sell it without any processing or adulterations. Needless to say that it remains Saturated, Unprocessed and Unheated Oil. This ensures that all the natural vitamins, phytonutrients, enzymes, and several other nutritional elements are retained. It offers all the benefits that come along with vitamin E. Besides, it also remains with antibacterial and anti-fungal properties. Buy pure Oil!
        </p>
        
      </div>
    </div>
  </article>
   {/* <article>
   
    <div class="article-wrapper">
      <figure>
      <img  style={myStyle2} src={image12}/>
      </figure>
      <div class="article-body">
        <h2>Ghee</h2>
        <p>
        We make Oil and sell it without any processing or adulterations. Needless to say that it remains Saturated, Unprocessed and Unheated Oil. This ensures that all the natural vitamins, phytonutrients, enzymes, and several other nutritional elements are retained. It offers all the benefits that come along with vitamin E. Besides, it also remains with antibacterial and anti-fungal properties. Buy pure Oil!
        </p>
        
      </div>
    </div>

  </article> */}
  {/* <article>

    <div class="article-wrapper">
      <figure>
      <img  style={myStyle2} src={image13}/>
      </figure>
      <div class="article-body">
        <h2>Oil Cake</h2>
        <p>
        We take  and we deliver it without any processing or adulterations. Needless to say that it remains Unpasteurized, Unprocessed and Unheated Honey. This ensures that all the natural vitamins, phytonutrients, enzymes, and several other nutritional elements are retained. It offers all the benefits that come along with anti-inflammatory properties. Besides, it also remains with antibacterial and anti-fungal properties. Buy Honey Online!
        </p>
        
      </div>
    </div>
  </article> */}
</section> 
<br></br><br></br><br></br>
        <h1>About Our Services</h1>
        <br></br><br></br>
        <section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img style={myStyle3} src={image2} />
      </figure>
      <div class="article-body">
        <h2>Raw & Pure</h2>
        <p>
        At Radhe Krishna Oils we provide the pure and healthy Oil with the natural content and attributes that define quality. Our pure and healthy oil promises the balanced blends . We have the best Oil products, explore to check our Oils. We are very assured about the Quality of Honey we provide. It is 100% healthy & Pure. Buy Pure Oil!
        </p>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img  style={myStyle3} src={image3 }/>
      </figure>
      <div class="article-body">
        <h2>Natural and Organic</h2>
        <p>
        We deliver honey with 100% Natural & Organic. Getting from the raw materials from own farm and naturally proceesed, here comes different types of oil, which remains as pure and pristine as the Mother Nature itself. It can be called as Certified Organic, which remains 100 per cent natural. Our Oil is  befitting for all cooking purposes. Buy pure Oil!
        </p>
        
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
      <img  style={myStyle3} src={image4}/>
      </figure>
      <div class="article-body">
        <h2>Processed</h2>
        <p>
        We make Oil and sell it without any processing or adulterations. Needless to say that it remains Saturated, Unprocessed and Unheated Oil. This ensures that all the natural vitamins, phytonutrients, enzymes, and several other nutritional elements are retained. It offers all the benefits that come along with vitamin E. Besides, it also remains with antibacterial and anti-fungal properties. Buy pure Oil!
        </p>
        
      </div>
    </div>
  </article>
</section>

        </center>
        </div>
         <Footer/> 
        </>
    )
}
export default Home;

