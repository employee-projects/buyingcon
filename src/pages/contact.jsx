import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';
import appData from "@data/app.json";
import { Formik } from 'formik';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ywashxd', 'template_3vj00yw', form.current, {
          publicKey: 'qy3Ojeu0vyCp3hpV8',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  const faqData = {
    "title": "FAQs",
    "subtitle": "Solving Business Queries",
    "items": [
        {
            "title": "What does Buying Concepts do?",
            "text": "We help businesses source and buy high-quality products like clothing, home goods, and hard goods from India and other countries. We handle everything—from finding the best manufacturers to ensuring quality and delivering the final products."
          },
          {
            "title": "Who are our customers?",
            "text": "Our customers range from boutique stores to high street retailers, department stores and discount retailers. "
          },
          {
            "title": "Why should you choose Buying Concepts?",
            "text": ''
          }
    ]
  }

  return (
    <Layouts>
        <PageBanner pageTitle={"Contact Us"} pageDesc={"Ready to bring your business ideas to life? Let’s get in touch."} />

        {/* Onovo Contact Info */}
        <section className="onovo-section gap-top-140 gap-bottom-100">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">

                        {/* Heading */}
                        <div className="onovo-text gap-bottom-40">
                            <h4>Send Us A Message</h4>
                        </div>

                        {/* Form */}
                        <div className="onovo-form">
                        {/* <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                        </form> */}
                        <Formik
                            initialValues = {{ email: '', name: '', tel: '', message: '' }}
                            validate = { values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit = {( values, { setSubmitting } ) => {
                                const form = document.getElementById("contactForm");
                                const status = document.getElementById("contactFormStatus");
                                const data = new FormData();

                                data.append('name', values.name);
                                data.append('tel', values.tel);
                                data.append('email', values.email);
                                data.append('message', values.message);

                                fetch(form.action, {
                                    method: 'POST',
                                    body: data,
                                    headers: {
                                        'Accept': 'application/json'
                                    }
                                }).then(response => {
                                    if (response.ok) {
                                        status.innerHTML = "Thanks for your submission!";
                                        form.reset()
                                    } else {
                                        response.json().then(data => {
                                            if (Object.hasOwn(data, 'errors')) {
                                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                                            } else {
                                                status.innerHTML = "Oops! There was a problem submitting your form"
                                            }
                                        })
                                    }
                                }).catch(error => {
                                    status.innerHTML = "Oops! There was a problem submitting your form"
                                });

                                setSubmitting(false);
                            }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                       
                            }) => (
                            <form ref={form} onSubmit={sendEmail} id="contactForm" className="cform" method="post">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Full Name" 
                                              type="text" 
                                              name="name" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.name}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Email Address" 
                                              type="email" 
                                              name="email" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.email}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="Phone Number" 
                                              type="tel" 
                                              name="tel" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.tel}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <textarea 
                                              placeholder="Message" 
                                              name="message"
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.message}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <button type="submit" className="onovo-btn onovo-hover-btn">
                                                <span>Send</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>

                                <div className="form-status alert-success" id="contactFormStatus" />
                            </form>
                            )}
                            </Formik>
                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">

                        {/* Contact Info */}
                        <div className="onovo-contact-info onovo-text-white">
                            <ul>
                                <li>
                                    <h4>Contact Info</h4>
                                    <br/>
                                    <h6>Mobile</h6>
                                    <a href="tel:+919818349232" className="onovo-lnk lnk--white" target="_blank">+91-9818349232 </a><br/>
                                    <a href="tel:+919871921044" className="onovo-lnk lnk--white" target="_blank">+91-9871921044 </a><br/>
                                    <br/>
                                    <h6>E-mail</h6>
                                    <a href="mailto:navveen@buyingconcepts.com" className="onovo-lnk lnk--white" target="_blank">navveen@buyingconcepts.com</a><br/>
                                    <a href="mailto:sunil@buyingconcepts.com" className="onovo-lnk lnk--white" target="_blank"> sunil@buyingconcepts.com</a>
                                    <br/>
                                    {/* <div className="onovo-social-1 onovo-social-active" style={{"marginTop": "10px"}}>
                                        <ul>
                                            {appData.social.map((item, key) => (
                                            <li key={`contact-social-item-${key}`}>
                                                <a href={item.link} target="_blank" className="onovo-social-link onovo-hover-2" title={item.title}>
                                                    <i className={`icon ${item.icon}`} />
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div> */}
                                </li>
                                <li>
                                <h6>Address</h6>
                                    <div> B-207, OKHLA PHASE 1, NEW DELHI, <br/>DELHI - 110020</div>
                                </li>
                                {/* <li>
                                    <h5>Los Angeles</h5>
                                    <div>2001 N. Clybourn Avenue Suite 202</div>
                                </li> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Onovo Faq */}
        <section className="onovo-section gap-top-140">
            <div className="container">

                {/* Heading */}
                <div className="onovo-heading align-center gap-bottom-40">
                    <div className="onovo-subtitle-1">
                        <span>{faqData.title}</span>
                    </div>
                    <h2 className="onovo-title-2">
                        <span dangerouslySetInnerHTML={{ __html: faqData.subtitle }} />
                    </h2>
                </div>

                {/* Faq items */}
                {/* <div className="onovo-faq-items">
                <Accordion defaultActiveKey="faq-acc-0">
                    {faqData.items.map((item, key) => (
                    <Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
                    <div key={`faq-item-${key}`} className="onovo-faq-item onovo-collapse-item">
                        <Accordion.Header>
                        <h5 className="title onovo-collapse-btn">
                            <span>{item.title}</span>
                            <i className="arrow" />
                        </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div className="onovo-text">
                            <div dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                        </Accordion.Body>
                    </div>
                    </Accordion.Item>
                    ))}
                </Accordion>
                </div> */}
                
                <div className="onovo-faq-items">
                <Accordion defaultActiveKey="faq-acc-0">
                    <Accordion.Item>
                        <div className="onovo-faq-item ">
                            <Accordion.Header>
                            <h5 className="title onovo-collapse-btn">
                                <span>What does Buying Concepts do?</span>
                                <i className="arrow" />
                            </h5>
                            </Accordion.Header>
                            <Accordion.Body>
                            <div className="onovo-text">
                                <div>
                                    Established in 1997 in New Delhi, Buying Concepts is a leading international trading and sourcing company with over 25 years of expertise. 
                                    With offices in India and Australia, we specialize in sourcing and exporting high-quality products including apparel, soft goods, 
                                    and hard goods to global markets at highly competitive prices.
                                </div>
                            </div>
                            </Accordion.Body>
                        </div>
                    </Accordion.Item>

                </Accordion>

                <Accordion defaultActiveKey="faq-acc-0">
                <Accordion.Item>
                        <div className="onovo-faq-item onovo-collapse-item">
                            <Accordion.Header>
                            <h5 className="title onovo-collapse-btn">
                                <span>Why should you choose buying concepts?</span>
                                <i className="arrow" />
                            </h5>
                            </Accordion.Header>
                            <Accordion.Body>
                            <div className="onovo-text">
                                <div>
                                    <ol>
                                        <li>Reliable Partner
                                            <ul>
                                                <li>Trusted buying agency with decades of experience.</li>
                                                <li>Expertise in managing a global, multi-category supply chain across apparel, hard goods, and soft goods.</li>
                                                <li>Comprehensive end-to-end capabilities for seamless procurement.</li>
                                            </ul>
                                        </li>
                                        <li>Strong Culture
                                            <ul>
                                                <li>Entrepreneurial mindset ensures efficient performance and growth.</li>
                                                <li>Focus on fostering inclusive progress for all stakeholders.</li>
                                            </ul>
                                        </li>
                                        <li>Compliance Excellence
                                            <ul>
                                                <li>Adherence to global compliance standards backed by industry experts.</li>
                                                <li>Partnerships with renowned global audit firms ensure ethical and responsible practices.</li>
                                            </ul>
                                        </li>
                                        <li>Design-Driven Approach
                                            <ul>
                                                <li>Global design and manufacturing units stay ahead of the latest trends.</li>
                                                <li>Reduced go-to-market time for enhanced competitiveness.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            </Accordion.Body>
                        </div>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="faq-acc-0">
                <Accordion.Item>
                        <div className="onovo-faq-item onovo-collapse-item">
                            <Accordion.Header>
                            <h5 className="title onovo-collapse-btn">
                                <span>Who are our customers?</span>
                                <i className="arrow" />
                            </h5>
                            </Accordion.Header>
                            <Accordion.Body>
                            <div className="onovo-text">
                                <div>
                                    Our customers range from boutique stores to high street retailers, department stores and discount retailers.
                                </div>
                            </div>
                            </Accordion.Body>
                        </div>
                    </Accordion.Item>
                </Accordion>
                </div>
            </div>
        </section>
      
    </Layouts>
  );
};
export default Contact;
