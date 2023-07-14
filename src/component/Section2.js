import image01 from "./images/Property-1-488x326.jpg"
import image02 from "./images/Villa-in-Coral-Gables-488x326.jpg"
import image03 from "./images/zac-gudakov-0qir5hBOj18-unsplash-818x417.jpg"
import image04 from "./images/agent-female-7-1-150x150.jpg"
import image05 from "./images/agent-male-1-1-150x150.jpg"
import image06 from "./images/agent-male-1-1-150x150.jpg"
import image07 from "./images/Modern-House-488x326.jpg"
import image08 from "./images/House-Design-488x326.jpg"
import image09 from "./images/property-06-exterior-1-488x326.jpg"
import image10 from "./images/agent-male-1-1.jpg"
import image11 from "./images/agent-female-7-1.jpg"
import image12 from "./images/agent-female-6.jpg"
import image13 from "./images/agent-male-2.jpg"
import image14 from "./images/blog-image-1-2-488x326.jpg"
import image15 from "./images/blog-image-2-1-488x326.jpg"
import image16 from "./images/blog-image-3-1-488x326.jpg"
import { LiaBathSolid,LiaBedSolid, LiaExpandSolid } from "react-icons/lia";
import { FaHeart,FaMapMarkerAlt,FaCamera } from "react-icons/fa";
import { useState } from "react";




function Section2() {

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return(
<div>
  <div className="section02">
  <p className="recent-p">Recent</p>
  <p className="properties">Properties</p>
  <p className="latest-props">Check out some of out latest properties.</p>
  <div className="coverage-image">
<div className="coverage-inner1-1">
  <div className="coverage-img1">
  <img src={image01} alt="" />
  <FaHeart className ="new-heart"/>
  <p className="hot01">Hot</p>
  </div>
  <div className="coverage-inner2">
<h3>Home in Merrick Way</h3>
<p className="enhance-p">Enchanting three bedroom, three bath homes <br /> with spacious bedroom</p>
<div className="flexed-p">
  <p>Bedroom</p>
  <p>Bathroom</p>
  <p>Area</p>
</div>

<div className="flexed-p-2">
  <div className="p-1">
    <LiaBedSolid className="bathroom-icon01"/>
    <p className="number-decs">3</p>
  </div>
  <div className="p-1">
    <LiaBathSolid className="bathroom-icon02"/>
    <p className="number-decs"> 3</p>
  </div>
  <div className="p-1">
    <LiaExpandSolid className="bathroom-icon03"/> 
    <p className="number-decs">4300 <span>sqft ft</span></p>
    </div>
</div>
<div className="movement">
<p className="for-sale">For Sale</p>
<p className="cashway">$540,000</p>
</div>


  </div>
  
</div>
<div className="coverage-inner1">
  <div className="coverage-img1">
  <img src={image02} alt="" />
  <FaHeart className ="new-heart-2"/>
  <p className="hot-2">New</p>
  </div>
  <div className="coverage-inner2">
<h3>Villa in Coral Gables</h3>
<p className="enhance-p">Enjoy serinity of Deering Bay Whole day from <br /> spectacular...</p>
<div className="flexed-p">
  <p>Bedroom</p>
  <p>Bathroom</p>
  <p>Area</p>
</div>

<div className="flexed-p-2">
  <div className="p-1">
    <LiaBedSolid className="bathroom-icon01"/>
    <p className="number-decs">3</p>
  </div>
  <div className="p-1">
    <LiaBathSolid className="bathroom-icon02"/>
    <p className="number-decs"> 3</p>
  </div>
  <div className="p-1">
    <LiaExpandSolid className="bathroom-icon03"/> 
    <p className="number-decs">3500 <span>sqft ft</span></p>
    </div>
</div>
<div className="movement">
<p className="for-sale">For Sale</p>
<p className="cashway">$825,000</p>
</div>


  </div>
  
</div>
<div className="coverage-inner1">
  <div className="coverage-img1">
  <img src={image03} alt="" />
  <FaHeart className ="new-heart-3"/>
  {/* <p className="hot">Hot</p> */}
  </div>
  <div className="coverage-inner2">
<h3>Villa on Hollywood Boulevard</h3>
<p className="enhance-p">The very best waterfront location in Habor  <br /> island complete with...</p>
<div className="flexed-p">
  <p>Bedroom</p>
  <p>Bathroom</p>
  <p>Area</p>
</div>

<div className="flexed-p-2">
  <div className="p-1">
    <LiaBedSolid className="bathroom-icon01"/>
    <p className="number-decs">3</p>
  </div>
  <div className="p-1">
    <LiaBathSolid className="bathroom-icon02"/>
    <p className="number-decs"> 3</p>
  </div>
  <div className="p-1">
    <LiaExpandSolid className="bathroom-icon03"/> 
    <p className="number-decs">4530 <span>sqft ft</span></p>
    </div>
</div>
<div className="movement">
<p className="for-sale">For Sale</p>
<p className="cashway">$740,000</p>
</div>


  </div>
  
</div>
  </div>

  <div className="next-cont">
<p className="no1">1</p>
<p className="no1">2</p>
<p className="no1">3</p>
<p className="no1">4</p>

  </div>
  </div>


  <div className="section02">
  <p className="recent-p">properties</p>
  <p className="properties">For Sale</p>
  <p className="latest-props">Check out some of out latest properties.</p>
    <div className="coverage-image">
<div className="coverage-inner1-02">
  <div className="coverage-img02">
  <img src={image01} alt="" />
  <div className="cameraicon-div02">
  <FaCamera className="camera-icon"/> 
  <p >1</p>
  </div>
  
  <FaHeart className ="new-heart02"/>
  <p className="hot03">For sale</p>
  </div>
  <div className="coverage-inner02">
<h3>Home in Merrick Way</h3>
<div className="location-text">
<FaMapMarkerAlt className="location-icon"/>
<p>Merrick Way, Miami,FL 33134, USA</p>
</div>
<p className="enhance-p02">Added: <span className="enhance-inner">June 15, 2020</span></p>
<div className="flexed-p">
  <p>Bedroom</p>
  <p>Bathroom</p>
  <p>Area</p>
</div>

<div className="flexed-p-2">
  <div className="p-1">
    <LiaBedSolid className="bathroom-icon01"/>
    <p className="number-decs">3</p>
  </div>
  <div className="p-1">
    <LiaBathSolid className="bathroom-icon02"/>
    <p className="number-decs"> 3</p>
  </div>
  <div className="p-1">
    <LiaExpandSolid className="bathroom-icon03"/> 
    <p className="number-decs">4300 <span>sqft ft</span></p>
    </div>
</div>
<div className="movement">
<p className="for-sale02">For Sale</p>
<p className="cashway02">$540,000</p>
</div>

<div className="agent-div">
  <div className="image-agent">
  <img src={image04} alt="" />
  </div>

<div className="text-divv">
<p className="mel">Melissa william</p>
<p className="james">James Estate Agent </p>
</div>

</div>

  </div>
  
</div>
<div className="coverage-inner1-02">
  <div className="coverage-img02">
  <img src={image02} alt="" />
  <div className="cameraicon-div">
  <FaCamera className="camera-icon"/> 
  <p >1</p>
  </div>
  
  <FaHeart className ="new-heart03"/>
  <p className="hot00">For sale</p>
  </div>
  <div className="coverage-inner02">
<h3>Villa in Coral Gables</h3>
<div className="location-text">
<FaMapMarkerAlt className="location-icon"/>
<p>Deering Bay Drive, Coral Gables, Fl 33158, USA</p>
</div>
<p className="enhance-p02">Added: <span className="enhance-inner">June 14, 2020</span></p>
<div className="flexed-p">
  <p>Bedroom</p>
  <p>Bathroom</p>
  <p>Area</p>
</div>

<div className="flexed-p-2">
  <div className="p-1">
    <LiaBedSolid className="bathroom-icon01"/>
    <p className="number-decs">3</p>
  </div>
  <div className="p-1">
    <LiaBathSolid className="bathroom-icon02"/>
    <p className="number-decs"> 3.5</p>
  </div>
  <div className="p-1">
    <LiaExpandSolid className="bathroom-icon03"/> 
    <p className="number-decs">4300 <span>sqft ft</span></p>
    </div>
</div>
<div className="movement">
<p className="for-sale02">For Sale</p>
<p className="cashway02">$825,000</p>
</div>

<div className="agent-div">
  <div className="image-agent">
  <img src={image05} alt="" />
  </div>

<div className="text-divv">
<p className="mel">Nathan James</p>
<p className="james">James Estate Agent </p>
</div>

</div>

  </div>
  
</div>
<div className="coverage-inner1-02">
  <div className="coverage-img02">
  <img src={image03} alt="" />
  <div className="cameraicon-div00">
  <FaCamera className="camera-icon"/> 
  <p >1</p>
  </div>
  
  <FaHeart className ="new-heart002"/>
  <p className="hot000">For sale</p>
  </div>
  <div className="coverage-inner02">
<h3>Villa on Hollywood Boulevard</h3>
<div className="location-text">
<FaMapMarkerAlt className="location-icon"/>
<p>Hatteras Lane, Hollywood, FL 33019, USA</p>
</div>
<p className="enhance-p02">Added: <span className="enhance-inner">June 13, 2020</span></p>
<div className="flexed-p">
  <p>Bedroom</p>
  <p>Bathroom</p>
  <p>Area</p>
</div>

<div className="flexed-p-2">
  <div className="p-1">
    <LiaBedSolid className="bathroom-icon01"/>
    <p className="number-decs">3</p>
  </div>
  <div className="p-1">
    <LiaBathSolid className="bathroom-icon02"/>
    <p className="number-decs"> 4</p>
  </div>
  <div className="p-1">
    <LiaExpandSolid className="bathroom-icon03"/> 
    <p className="number-decs">4530 <span>sqft ft</span></p>
    </div>
</div>
<div className="movement">
<p className="for-sale02">For Sale</p>
<p className="cashway02">$740,000</p>
</div>

<div className="agent-div">
  <div className="image-agent">
  <img src={image05} alt="" />
  </div>

<div className="text-divv">
<p className="mel">Nathan James</p>
<p className="james">James Estate Agent </p>
</div>

</div>

  </div>
  
</div>
    </div>

    <div className="next-cont">
<p className="no1">1</p>
<p className="no1">2</p>


  </div>

  

  </div>

  <div className="section02">
  <p className="recent-p">Properties</p>
  <p className="properties">For Rent</p>
  <p className="latest-props">Check out some of out latest properties.</p>
  <div className="coverage-image">
<div className="coverage-inner1-1">
  <div className="coverage-img1">
  <img src={image07} alt="" />
  <FaHeart className ="new-heart"/>
  {/* <p className="hot">Hot</p> */}
  </div>
  <div className="coverage-inner02">
<h3>Home in Merrick Way</h3>
<p className="enhance-p">We are an award winning and very unique <br /> concept unique</p>
<div className="flexed-p">
  <p>Area</p>

</div>

<div className="flexed-p-2">
  <div className="p-1">
    <LiaExpandSolid className="bathroom-icon01"/>
    <p className="number-decs">4300 <span>sq ft</span></p>
  </div>
  {/* <div className="p-1">
    <LiaBathSolid className="bathroom-icon02"/>
    <p className="number-decs"> 3</p>
  </div>
  <div className="p-1">
    <LiaExpandSolid className="bathroom-icon03"/> 
    <p className="number-decs">4300 <span>sqft ft</span></p>
    </div> */}
</div>
<div className="movement">
<p className="for-sale005">For rent</p>
<p className="cashway005">$2,600 Monthly</p>
</div>


  </div>
  
</div>
<div className="coverage-inner1">
  <div className="coverage-img1">
  <img src={image08} alt="" />
  <FaHeart className ="new-heart-2"/>
  <p className="hot-2">New</p>
  </div>
  <div className="coverage-inner02">
<h3>Villa in Grand Avenue</h3>
<p className="enhance-p">Spacious and fabulous home in prime location <br /> This executive style...</p>
<div className="flexed-p">
  <p>Bathroom</p>
  <p>Bedroom</p>
  <p>Area</p>

</div>

<div className="flexed-p-2">
  <div className="p-1">
    <LiaBedSolid className="bathroom-icon01"/>
    <p className="number-decs">3</p>
  </div>
  <div className="p-1">
    <LiaBathSolid className="bathroom-icon02"/>
    <p className="number-decs"> 4</p>
  </div>
  <div className="p-1">
    <LiaExpandSolid className="bathroom-icon03"/> 
    <p className="number-decs">9550 <span>sqft ft</span></p>
    </div>
</div>
<div className="movement">
<p className="for-sale005">For Rent</p>
<p className="cashway005">$4,750 Monthly</p>
</div>


  </div>
  
</div>
<div className="coverage-inner1">
  <div className="coverage-img1">
  <img src={image09} alt="" />
  <FaHeart className ="new-heart-3"/>
  {/* <p className="hot">Hot</p> */}
  </div>
  <div className="coverage-inner02">
<h3>Office Space at Northwest 107th</h3>
<p className="enhance-p">Beautifully lanscaped four story building and  <br /> professionally decorated  commom areas...</p>
<div className="flexed-p">
  <p>Areas</p>
  {/* <p>Bathroom</p>
  <p>Area</p> */}
</div>

<div className="flexed-p-2">
  <div className="p-1">
    <LiaExpandSolid className="bathroom-icon01"/>
    <p className="number-decs">2830 <span>sq ft</span></p>
  </div>
  {/* <div className="p-1">
    <LiaBathSolid className="bathroom-icon02"/>
    <p className="number-decs"> 3</p>
  </div>
  <div className="p-1">
    <LiaExpandSolid className="bathroom-icon03"/> 
    <p className="number-decs">4530 <span>sqft ft</span></p>
    </div> */}
</div>
<div className="movement">
<p className="for-sale005">For Rent</p>
<p className="cashway005">$3,100 Monthly</p>
</div>


  </div>
  
</div>
  </div>

  <div className="next-cont">
<p className="no1">1</p>
<p className="no1">2</p>


  </div>
  </div>

  <div className="section03">
  <p className="recent-p">Meet Our</p>
  <p className="properties">Agents</p>
  <p className="latest-props">Get in touch with our real estate expert</p>
  <div className="coverage-image02">
    <div className="section03-innerd">
      <div className="profile-div">
      <img src={image10} alt="" />
      </div>
      <div className="body-text02">
       
        <p className="body-text02-p1">Nathan James</p>
        <p className="body-text02-p2">1-234-456-7893</p>
        <p className="body-text02-p3">nathanjames@yahoo.com</p>
        <p className="body-text02-p4">4</p>
        <p className="body-text02-p5" >Listed properties</p>

      </div>
    </div>
    <div className="section03-innerd">
      <div className="profile-div">
      <img src={image11} alt="" />
      </div>
      <div className="body-text02">
       
        <p className="body-text02-p1">Mellissa William</p>
        <p className="body-text02-p2">1-244-679-9862</p>
        <p className="body-text02-p3">melissawilliam@yahoo.com</p>
        <p className="body-text02-p4">8</p>
        <p className="body-text02-p5" >Listed properties</p>

      </div>
    </div>
    <div className="section03-innerd">
      <div className="profile-div">
      <img src={image12} alt="" />
      </div>
      <div className="body-text02">
       
        <p className="body-text02-p1">Alice Brian</p>
        <p className="body-text02-p2">1-336-887-7893</p>
        <p className="body-text02-p3">alicebrain@yahoo.com</p>
        <p className="body-text02-p4">3</p>
        <p className="body-text02-p5" >Listed properties</p>

      </div>
    </div>
    <div className="section03-innerd">
      <div className="profile-div">
      <img src={image13} alt="" />
      </div>
      <div className="body-text02">
       
        <p className="body-text02-p1">John David</p>
        <p className="body-text02-p2">1-768-293-2343</p>
        <p className="body-text02-p3">johndavid@yahoo.com</p>
        <p className="body-text02-p4">9</p>
        <p className="body-text02-p5" >Listed properties</p>

      </div>
    </div>
  </div>
  </div>

  <div className="section05">
  <p className="recent-p">check out recent</p>
  <p className="properties">News & Updates</p>
  <p className="latest-props">From real estate industry and beyond</p>
    <div className="coverage-image-05">
<div className="coverage-image-05-innerd">
  <div className="image-divhere">
<img src={image14} alt="" />
  </div>
  <div className="body-divhere">
    <p className="june">June 16, 2020 in <span className="luxury">Luxury</span> </p>
    <p className="image">Image Post Format</p>
    <p className="enthusias">Enthusiastically disintermediate progressive <br /> innovation before high-payoff metrics. Intrinsicly <br /> generate sticky services without…</p>
    <p><span className="kostas">By</span> Kostas</p>
  </div>

</div>
<div className="coverage-image-05-innerd">
  <div className="image-divhere">
<img src={image15} alt="" />
  </div>
  <div className="body-divhere">
    <p className="june">June 15, 2020 in <span className="luxury">Luxury</span> </p>
    <p className="image">Gallery Post Format</p>
    <p className="enthusias">Competently harness enterprise vortals via <br /> revolutionary e-tailers. Monotonectally <br /> recaptiualize one-to-one relationships whereas…</p>
    <p><span className="kostas">By</span> Kostas</p>
  </div>

</div>
<div className="coverage-image-05-innerd">
  <div className="image-divhere">
<img src={image16} alt="" />
  </div>
  <div className="body-divhere">
    <p className="june">June 13, 2020 in <span className="luxury">Market Trends</span> </p>
    <p className="image">video Post Format</p>
    <p className="enthusias">Uniquely customize future-proof niche markets via <br /> worldwide users. Proactively negotiate user-centric schemas…</p>
    <p><span className="kostas">By</span> Kostas</p>
  </div>

</div>
    </div>
  </div>

  <div className="section04">
    <div className="section04-cont">
      <p className="buy-sell">Buy or Sell</p>
      <p className="decs-buy-sell">Looking to Buy a new property or Sell an existing one? <br /> RealHomes provides an awesome solution!</p>
      <div className="display-divss">
        <button className="display-divss-btn1">Meet Agent</button>
        <button className="display-divs-btn2">View properties</button>
      </div>
    </div>
  </div>

  <div className="section06">
    <div className="">

    </div>
  </div>
</div>
  )
}

export default Section2