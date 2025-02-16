import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const username = form.name.trim();
		const user_email = form.email.trim();
		const user_message = form.message.trim();

		if (username === '' || user_email === '' || user_message === '') {
			setLoading(false);
			toast.error("Please fill all the fields.", {
				position: 'bottom-right',
			});
			return;
		}

		try {
			const response = await fetch('https://formspree.io/f/xyzgeall', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: username,
					email: user_email,
					message: user_message,
				}),
			});

			if (response.ok) {
				toast.success("Message sent successfully!", {
					position: 'bottom-right',
				});
				setForm({
					name: "",
					email: "",
					message: "",
				});
			} else {
				toast.error("Failed to send message. Please try again later.", {
					position: 'bottom-right',
				});
			}
		} catch (error) {
			toast.error("An error occurred. Please try again later.", {
				position: 'bottom-right',
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='relative z-0 bg-white mt-12'>   
			<div className='text-black contact overflow-x-hidden pt-14 mt-8 py-7' id='contact'>
				<div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl'>
					<p className=' text-blue-500 font-medium tracking-wider uppercase'>REACH OUT TO ME</p>
					<h2 className='text-5xl font-extrabold mt-2 text-gray-800'>Contact.</h2>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='mt-12 flex flex-col gap-8'
					>
						<label className='flex flex-col'>
							<span className='font-medium mb-4'>Your Name</span>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder="Enter your name"
								className='py-4 px-6 rounded-lg font-medium bg-[#f3f4f6]'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className='font-medium mb-4'>Your email</span>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								placeholder="Ex:abc@gmail.com"
								className='py-4 px-6 rounded-lg font-medium bg-[#f3f4f6]'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className='font-medium mb-4'>Your Message</span>
							<textarea
								rows={7}
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder='Do you have anything to say?'
								className='py-4 px-6 rounded-lg font-medium bg-[#f3f4f6]'
								required
							/>
						</label>

						<button
							type='submit'
							className='pt-3 px-8 w-fit font-bold bg-blue-500 text-white p-3 rounded-md hover:bg-blue-300'
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</div>
				<ToastContainer />
			</div>
			<Footer/>
		</div>
	);
};

export default Contact;
