import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';
import appData from "@data/app.json";
import { Formik } from 'formik';

const Contact = () => {
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
            "text": "We work with global brands and businesses that need reliable sourcing partners. Some of our clients include BELK, KIDPIK, CHEROKEE, and many more."
          },
          {
            "title": "Why should you choose Buying Concepts?",
            "text": "With 25+ years of experience, we provide top-quality products at competitive prices. We ensure quality, compliance, and smooth delivery, making sourcing hassle-free for businesses."
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
                                /* and other goodies */
                            }) => (
                            <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL} className="cform" method="post">
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
                                    <a href="tel:+9818349232" className="onovo-lnk lnk--white" target="_blank">+91-9818349232 </a><br/>
                                    <a href="tel:+9810555791" className="onovo-lnk lnk--white" target="_blank">+91-9810555791</a><br/>
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
                <div className="onovo-faq-items">
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
                </div>
                
            </div>
        </section>
      
    </Layouts>
  );
};
export default Contact;
