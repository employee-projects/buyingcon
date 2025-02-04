import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";

const FAQ = () => {
  const Content = {
    "items": [
      {
        "heading": "What does Buying Concepts do?",
        "content": "We help businesses source and buy high-quality products like clothing, home goods, and hard goods from India and other countries. We handle everything—from finding the best manufacturers to ensuring quality and delivering the final products."
      },
      {
        "heading": "Who are your customers?",
        "content": "We work with global brands and businesses that need reliable sourcing partners. Some of our clients include BELK, KIDPIK, CHEROKEE, and many more."
      },
      {
        "heading": "Why should you choose Buying Concepts?",
        "content": "ith 25+ years of experience, we provide top-quality products at competitive prices. We ensure quality, compliance, and smooth delivery, making sourcing hassle-free for businesses."
      }
    ]
  }

  return (
    <Layouts>
      <PageBanner pageTitle={"Client’s FAQ"} pageDesc={"Solving business problems is an everyday."} />
      
      {/* Onovo Faq */}
			<section className="onovo-section gap-top-140 gap-bottom-140">
				<div className="container">

          {/* Faq items */}
          <Accordion>
          <div className="onovo-faq-items">
            {Content.items.map((item, key) => (
            <Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
            <div className="onovo-faq-item onovo-collapse-item">
              <Accordion.Header>
              <h5 className="title onovo-collapse-btn">
                <span>{item.heading}</span>
                <i className="arrow" />
              </h5>
              </Accordion.Header>
              <Accordion.Body>
                <div className="onovo-text">
                  <div dangerouslySetInnerHTML={{__html : item.content}} />
                </div>
              </Accordion.Body>
            </div>
            </Accordion.Item>
            ))}
          </div>
          </Accordion>

        </div>
			</section>

      <CallToActionSection />

      <PartnersSection paddingTop />

    </Layouts>
  );
};
export default FAQ;