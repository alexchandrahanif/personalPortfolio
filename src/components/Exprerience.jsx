/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
	{
		company: 'PT BUKIT ASAM TBK (Joint Dev)',
		location: 'Jakarta, ID',
		role: 'Fullstack Developer',
		period: 'Dec 2024 – Present',
		type: 'Full-time',
		description: [
			'Architected and optimized high-performance database schemas to manage mission-critical data including finance, logistics, and order management.',
			'Developed robust APIs using Express.js to power the CISSE Super App ecosystem, ensuring high availability and seamless system performance.',
			'Engineered end-to-end solutions as a Fullstack Developer, bridging backend logic with Angular-based frontend implementations.',
			'Spearheaded strategic integration with PT KAI (Indonesian Railways) systems to automate and optimize coal transportation logistics.',
		],
	},
	{
		company: 'PT TELEMEDIKA TEKNOLOGI INDONESIA',
		location: 'Jakarta, ID',
		role: 'Fullstack Developer',
		period: 'Jun 2024 – Dec 2024',
		type: 'Full-time',
		description: [
			'Designed scalable database architectures using Fastify to support complex digital healthcare services and order processing.',
			"Lead Developer for the 'getDoctor' project, successfully managing end-to-end API integrations with Prodia for medical laboratory services.",
			'Built cross-platform solutions utilizing React and React Native for seamless user experiences across web and mobile platforms.',
			'Maintained secure and efficient data flow between internal systems and third-party healthcare providers.',
		],
	},
	{
		company: 'PT CITRA MANDIRI NEGARA',
		location: 'Jakarta, ID',
		role: 'Backend Developer',
		period: 'Jan 2023 – Jun 2024',
		type: 'Full-time',
		description: [
			'Successfully developed and maintained an extensive library of 500+ APIs, supporting diverse business processes from sales to estimation.',
			'Optimized financial workflows by integrating internal systems with the Mekari Journal accounting platform.',
			'Designed efficient backend architectures that significantly improved internal data processing and subsidiary system synchronization.',
			'Applied best practices in API documentation and versioning to ensure long-term system maintainability.',
		],
	},
];

const Experience = () => {
	return (
		<section
			id="experience"
			className="w-full py-24 bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
			<div className="container mx-auto px-6 md:px-12">
				{/* Header */}
				<div className="flex flex-col items-center mb-16">
					<div className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-bold text-sm mb-4">
						Experience
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text text-center">
						Professional <span className="text-primary">Journey</span>
					</h2>
				</div>

				{/* Timeline Container */}
				<div className="max-w-4xl mx-auto relative">
					{/* Vertical Line Desktop */}
					<div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

					<div className="flex flex-col gap-12">
						{experiences.map((exp, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
									index % 2 === 0 ? 'md:flex-row-reverse' : ''
								}`}>
								{/* Desktop Dot */}
								<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-dark-bg z-10 hidden md:block"></div>

								{/* Content Card */}
								<div className="w-full md:w-[45%]">
									<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-colors group">
										<div className="flex justify-between items-start mb-4">
											<div>
												<h3 className="text-xl font-bold text-primary mb-1">
													{exp.role}
												</h3>
												<p className="text-sm font-semibold text-light-text dark:text-white flex items-center gap-1">
													<Briefcase size={14} /> {exp.company}
												</p>
											</div>
											<span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-secondary px-2 py-1 rounded uppercase tracking-wider">
												{exp.type}
											</span>
										</div>

										<div className="flex flex-wrap gap-4 mb-4 text-xs text-secondary italic">
											<div className="flex items-center gap-1">
												<Calendar size={12} /> {exp.period}
											</div>
											<div className="flex items-center gap-1">
												<MapPin size={12} /> {exp.location}
											</div>
										</div>

										<ul className="space-y-3">
											{exp.description.map((item, i) => (
												<li
													key={i}
													className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
													<span className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-1.5 shrink-0"></span>
													{item}
												</li>
											))}
										</ul>
									</div>
								</div>

								{/* Spacer untuk desktop (agar zigzag) */}
								<div className="hidden md:block w-[45%]"></div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
