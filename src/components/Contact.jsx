/** @format */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
	Mail,
	Phone,
	Copy,
	Check,
	Instagram,
	Linkedin,
	Github,
	Gitlab,
} from 'lucide-react';
import Kapsul from './Kapsul';

const Contact = () => {
	const [copied, setCopied] = useState(false);
	const email = 'alexchandra1998@gmail.com';

	const copyToClipboard = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const socials = [
		{
			icon: <Instagram size={20} />,
			link: 'https://www.instagram.com/alexchandrahanif/?hl=id',
			label: 'Instagram',
		},
		{
			icon: <Linkedin size={20} />,
			link: 'https://www.linkedin.com/in/alex-chandra-hanif-aa9955236/',
			label: 'LinkedIn',
		},
		{
			icon: <Github size={20} />,
			link: 'https://github.com/Alexchandrahanif',
			label: 'GitHub',
		},
		{
			icon: <Gitlab size={20} />,
			link: 'https://gitlab.com/alexchandra1998',
			label: 'GitLab',
		},
	];

	return (
		<section
			id="contact"
			className="w-full py-24 px-6 dark:bg-dark-bg transition-colors duration-300">
			<div className="container mx-auto max-w-4xl">
				{/* Title & Header */}
				<div className="flex flex-col items-center text-center mb-12">
					<Kapsul isi="Get In Touch" />
					<h2 className="text-3xl md:text-4xl font-bold mt-4 text-light-text dark:text-dark-text">
						Let's Build Something <span className="text-primary">Great</span>
					</h2>
					<p className="text-secondary dark:text-slate-400 mt-4 max-w-lg leading-relaxed">
						I’m currently looking for new opportunities. Whether you have a
						question or just want to say hi, I’ll try my best to get back to
						you!
					</p>
				</div>

				{/* Contact Info Cards */}
				<div className="flex flex-col items-center gap-8 mb-16">
					{/* Email Card */}
					<motion.div
						whileHover={{ scale: 1.02 }}
						className="flex flex-col md:flex-row items-center gap-4 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm w-full md:w-auto">
						<div className="p-3 bg-primary/10 rounded-2xl text-primary">
							<Mail size={28} />
						</div>
						<span className="text-xl md:text-3xl font-bold text-light-text dark:text-white break-all text-center">
							{email}
						</span>
						<button
							onClick={copyToClipboard}
							className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors relative group"
							title="Copy Email">
							{copied ? (
								<Check
									size={24}
									className="text-green-500"
								/>
							) : (
								<Copy
									size={24}
									className="text-slate-400"
								/>
							)}
							<span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
								{copied ? 'Copied!' : 'Copy'}
							</span>
						</button>
					</motion.div>

					{/* Phone Card */}
					<div className="flex items-center gap-4">
						<div className="p-2 bg-primary/10 rounded-xl text-primary">
							<Phone size={20} />
						</div>
						<p className="text-lg md:text-xl font-medium text-secondary dark:text-slate-300 italic">
							+62 823-8819-****
						</p>
					</div>
				</div>

				{/* Social Platforms */}
				<div className="flex flex-col items-center border-t border-slate-100 dark:border-slate-800 pt-12">
					<p className="text-sm font-medium text-slate-400 uppercase tracking-[0.2em] mb-8">
						Find me on social platforms
					</p>
					<div className="flex gap-4 md:gap-6">
						{socials.map((social, index) => (
							<motion.a
								key={index}
								href={social.link}
								target="_blank"
								rel="noreferrer"
								whileHover={{ y: -5 }}
								className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary dark:hover:text-primary hover:shadow-lg transition-all"
								aria-label={social.label}>
								{social.icon}
							</motion.a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
