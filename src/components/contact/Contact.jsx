import './Contact.scss';
import { images } from '../../constants/index';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_p0rjw4q',
				'template_pb6a6lw',
				formRef.current,
				'v30njZ5vyciXJIewq'
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className="contact" id="contact">
			<div className="contact-wrapper">
				<div className="contact-left">
					<h1 className="contact-title">Get in touch!</h1>
					<div className="contact-info">
						<div className="contact-info-item">
							<img src={images.phone} alt="" className="contact-icon" />
							+1 (443) 972-1212
						</div>
						<div className="contact-info-item">
							<img src={images.email} alt="" className="contact-icon" />
							brandonn.dev@gmail.com
						</div>
						<div className="contact-info-item">
							<img src={images.address} alt="" className="contact-icon" />
							Baltimore - Washington, D.C. Area
						</div>
					</div>

					<img src={images.callMe} alt="call-me" className="call-me-memoji" />
				</div>
				<div className="contact-right">
					<div className="contact-container">
						<p className="contact-description">
							<b>Write me!</b> I am currently looking for a full-time position
							and am always open to freelancing if the right project comes
							around.
						</p>

						<form ref={formRef} onSubmit={handleSubmit} id="form">
							<input type="text" placeholder="Name" name="user_name" />
							<input type="text" placeholder="Subject" name="user_subject" />
							<input type="email" placeholder="Email" name="user_email" />
							<textarea
								placeholder="Message"
								name="message"
								cols="1"
								rows="5"
							></textarea>
							<button type="submit" value="Send">
								Submit
							</button>
							{done && 'Thank you...'}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
