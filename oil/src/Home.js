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



function Home(){
      
    const myStyle1={
      backgroundRepeat: 'no-repeat',
      height:'400px',
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
  </div>
  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        
        <h1>Our Products</h1>
        <p>Shop our pure products and enjoy the food</p>

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
        At Aalaa we provide the pure and raw honey with the natural content and attributes that define quality. Our pure and raw honey promises the balanced blends of different flora from all over the nation. We have the best collection of honey with us, explore to check our collection of authentic honey. We are very assured about the Quality of Honey we provide. It is 100% Raw & Pure. Buy Honey Online!
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
        We deliver honey with 100% Natural & Organic. Getting from the upper reaches of the forest and Mountains, here comes honey, which remains as pure and pristine as the Mother Nature itself. It can be called as Certified Organic, which remains 100 per cent natural, and creamy. Our honey is a harmonious composition of the natural flora and fauna, which remains befitting for all sweetening purposes. Buy Honey Online!
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
        We take Honey and we deliver it without any processing or adulterations. Needless to say that it remains Unpasteurized, Unprocessed and Unheated Honey. This ensures that all the natural vitamins, phytonutrients, enzymes, and several other nutritional elements are retained. It offers all the benefits that come along with anti-inflammatory properties. Besides, it also remains with antibacterial and anti-fungal properties. Buy Honey Online!
        </p>
        
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
      <img  style={myStyle2} src={image12}/>
      </figure>
      <div class="article-body">
        <h2>Ghee</h2>
        <p>
        We take Honey and we deliver it without any processing or adulterations. Needless to say that it remains Unpasteurized, Unprocessed and Unheated Honey. This ensures that all the natural vitamins, phytonutrients, enzymes, and several other nutritional elements are retained. It offers all the benefits that come along with anti-inflammatory properties. Besides, it also remains with antibacterial and anti-fungal properties. Buy Honey Online!
        </p>
        
      </div>
    </div>
  </article>
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
        At Aalaa we provide the pure and raw honey with the natural content and attributes that define quality. Our pure and raw honey promises the balanced blends of different flora from all over the nation. We have the best collection of honey with us, explore to check our collection of authentic honey. We are very assured about the Quality of Honey we provide. It is 100% Raw & Pure. Buy Honey Online!
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
        We deliver honey with 100% Natural & Organic. Getting from the upper reaches of the forest and Mountains, here comes honey, which remains as pure and pristine as the Mother Nature itself. It can be called as Certified Organic, which remains 100 per cent natural, and creamy. Our honey is a harmonious composition of the natural flora and fauna, which remains befitting for all sweetening purposes. Buy Honey Online!
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
        We take Honey and we deliver it without any processing or adulterations. Needless to say that it remains Unpasteurized, Unprocessed and Unheated Honey. This ensures that all the natural vitamins, phytonutrients, enzymes, and several other nutritional elements are retained. It offers all the benefits that come along with anti-inflammatory properties. Besides, it also remains with antibacterial and anti-fungal properties. Buy Honey Online!
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

