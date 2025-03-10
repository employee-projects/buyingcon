import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@library/services";

import CountUp from 'react-countup';
import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import Team2Section from "@components/sections/Team2"
import PartnersSection from "@components/sections/Partners"
import AwardsSection from "@components/sections/Awards"
import Services4Section from "@components/sections/Services4"

const HistorySlider = dynamic( () => import("@components/sliders/History"), { ssr: false } );
const Testimonial2Slider = dynamic( () => import("@components/sliders/Testimonial2"), { ssr: false } );

const About = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add('active');
    let videoIframe = e.target.parentNode.querySelector('.js-video-iframe');
    let videoUrl = 'https://indiaspfstorage.s3.us-east-2.amazonaws.com/About+Movie.mp4';
    videoIframe.setAttribute('src', videoUrl);
  }

  return (
    <Layouts>
    	<PageBanner pageTitle={"About Us"} pageDesc={"Helping You make smart, efficient purchasing decisions."} />
      
      	{/* Onovo About */}
	  	<section className="onovo-section gap-top-140 gap-bottom-140">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

						{/* Heading */}
						<div className="onovo-heading gap-bottom-60">
							<div className="onovo-subtitle-1">
								<span> Welcome to BUYING CONCEPTS </span>
							</div>
							<h2 className="onovo-title-2">
								<span> Effortlessly connecting you with the finest experiences </span>
							</h2>
							<div className="onovo-text">
								<p>
								At Buying Concepts, we pride ourselves on our ability to provide tailored, innovative solutions through a strategic and proactive approach. 
								Our commitment to regular communication, constant visits, and timely actions ensures smooth operations, even in the most complex and challenging 
								situations. <br/>
								We are driven by core values of integrity, transparency, customer satisfaction, and courage, which guide us in building trusted 
								relationships with our clients and partners. Our unwavering focus on excellence makes us the preferred 
								business partner and employer in the industry.
								</p>
								<ul>
									<li>Reliable Partner</li>
									<li>Strong Culture</li>
									<li>Compliance Excellence</li>
									<li>Design-Driven Approach</li>
								</ul>
							</div>
							
						</div>

					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">

						{/* Image */}
						{/* <img src="/images/clients/watermark_bc.png" alt="" /> */}

					</div>
				</div>

				{/* Numbers items */}
				<div className="row gap-row gap-bottom-100">

					{/*number-item*/}
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div className="onovo-counter">
							<div className="num onovo-text-white js-counter" data-end-value="23">
								<CountUp end="25" duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
							</div>
							<div className="num-after onovo-text-white"> + </div>
							<div className="label"> Years Of Experience </div>
						</div>
					</div>

					{/*number-item*/}
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div className="onovo-counter">
							<div className="num onovo-text-white js-counter" data-end-value="99">
								<CountUp end="73" duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
							</div>
							<div className="num-after onovo-text-white"> + </div>
							<div className="label"> Completed projects </div>
						</div>
					</div>

					{/*number-item*/}
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div className="onovo-counter">
							<div className="num onovo-text-white js-counter" data-end-value="12">
								<CountUp end="3" duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
							</div>
							<div className="num-after onovo-text-white">  </div>
							<div className="label"> Office Locations </div>
						</div>
					</div>

				</div>

				{/* Video */}
				<div className="onovo-video" data-onovo-overlay data-onovo-scroll>
					<div className="image" onClick={ (e) => clickedVideoButton(e) } style={{"backgroundImage": "url(/images/clients/banner.png)"}} />
					<iframe className="js-video-iframe w-100" look  data-src="https://indiaspfstorage.s3.us-east-2.amazonaws.com/About+Movie.mp4&autoplay=1"></iframe>
					<div className="play onovo-circle-text" onClick={ (e) => clickedVideoButton(e) }>
						<div className="arrow" />
						<div className="label onovo-text-black onovo-circle-text-label"> Play Video - Play Video - Play Video - </div>
					</div>
				</div>

				{/* Description */}
				<div className="row gap-top-100 gap-bottom-40">
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
						<h4 className="text-uppercase" style={{"marginTop":'2px'}}>Our Mission</h4>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
					Our mission is to deliver exceptional sourcing and trading solutions by ensuring 
					quality, innovation, and efficiency at every step. We aim to build lasting global 
					partnerships by upholding the highest standards of integrity, transparency, and 
					customer satisfaction. Through our expertise and dedication, we strive to become 
					the most trusted and preferred sourcing company, empowering businesses 
					worldwide.
					To provide our customers outstanding service and innovative designs sourced in 
					most ethical manner.
					</div>
				</div>
	
				{/* Description */}
				<div className="row gap-top-40 " style={{"borderTop":'1px solid rgb(110, 110, 110)'}}>
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
					<h4 className="text-uppercase" style={{"marginTop":'2px'}}>Our Vision</h4>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
					Our vision is to be the most trusted and innovative sourcing company in the global 
					industry, connecting brands with sustainable, high-quality manufacturing solutions. We 
					aim to drive growth for our clients by delivering exceptional sourcing expertise, efficient 
					supply chain solutions, and a commitment to ethical and sustainable practices.
					</div>
				</div>

				{/* Gallery */}
				{/* <div className="row gap-top-100">
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<a href="/images/posts1.jpg" className="mfp-image">
							<img src="/images/posts1-1024x683.jpg" alt="" />
						</a>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60">
						<a href="/images/posts2.jpg" className="mfp-image">
							<img src="/images/posts2-1024x683.jpg" alt="" />
						</a>
					</div>
				</div> */}

			</div>
		</section>

		<Services4Section services={props.services} />

		{/* <AwardsSection /> */}

      	{/* <HistorySlider /> */}

      	{/* <Team2Section team={props.team} /> */}

      	{/* <Testimonial2Slider /> */}

      	<PartnersSection />
      
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();
  const allServices = getSortedServicesData();

  return {
    props: {
      team: allTeam,
	  services: allServices
    }
  }
}