/** @format */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Database, Terminal, Globe } from 'lucide-react';

const projects = [
	{
		title: 'Printhink Ecosystem',
		type: 'Enterprise ERP',
		description:
			'Architected a comprehensive ERP backend with automated financial reporting integrated with Mekari Jurnal API.',
		link: 'http://sistem.printhink.id',
		tags: ['Node.js', 'PostgreSQL', 'Mekari API'],
		icon: (
			<Database
				className="text-primary"
				size={32}
			/>
		),
	},
	{
		title: 'Citra Factory Management',
		type: 'Warehouse & WMS',
		description:
			'Industrial Warehouse Management System for vendor procurement and printing machine health monitoring.',
		link: null,
		tags: ['Fastify', 'WhatsApp API', 'Redis'],
		icon: (
			<Terminal
				className="text-blue-400"
				size={32}
			/>
		),
	},
	{
		title: 'Healthcare Digital Service',
		type: 'Telemedicine',
		description:
			'Backend system for getDoctor project with medical laboratory integration via Prodia API.',
		link: null,
		tags: ['React Native', 'Fastify', 'Healthcare'],
		icon: (
			<Globe
				className="text-emerald-400"
				size={32}
			/>
		),
	},
	{
		title: 'Coal Logistics Integration',
		type: 'Transportation System',
		description:
			'Strategic integration between PT Bukit Asam Tbk and PT KAI for automated coal transportation logistics.',
		link: null,
		tags: ['Express.js', 'KAI Integration', 'Angular'],
		icon: (
			<Code2
				className="text-amber-400"
				size={32}
			/>
		),
	},
];

const Work = () => {
	// Gandakan project agar loop terasa panjang
	const duplicatedProjects = [...projects, ...projects, ...projects];
	const [isPaused, setIsPaused] = useState(false);

	return (
		<section
			id="work"
			className="w-full py-24 bg-white dark:bg-dark-bg transition-colors duration-300 overflow-hidden">
			<div className="container mx-auto px-6 md:px-12 mb-12">
				<div className="max-w-xl">
					<div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-bold text-sm mb-4">
						Portfolio
					</div>
					<h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text">
						Selected <span className="text-primary">Works</span>
					</h2>
				</div>
			</div>

			{/* Outer Container yang menangkap Drag */}
			<div className="relative w-full cursor-grab active:cursor-grabbing">
				<motion.div
					className="flex gap-6 px-6 md:px-12"
					drag="x"
					dragConstraints={{ right: 0, left: -2000 }} // Sesuaikan angka left dengan jumlah kontenmu
					style={{ width: 'max-content' }}
					animate={isPaused ? {} : { x: [0, -1500] }} // Animasi jalan jika tidak di-pause
					transition={{
						x: {
							repeat: Infinity,
							repeatType: 'loop',
							duration: 40, // Kecepatan pelan
							ease: 'linear',
						},
					}}
					onHoverStart={() => setIsPaused(true)}
					onHoverEnd={() => setIsPaused(false)}
					onDragStart={() => setIsPaused(true)}>
					{duplicatedProjects.map((project, index) => (
						<div
							key={index}
							className="w-[300px] md:w-[450px] bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between group/card transition-all hover:border-primary/50 hover:shadow-premium whitespace-normal pointer-events-auto">
							<div>
								<div className="mb-6 flex justify-between items-start">
									<div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
										{project.icon}
									</div>
									{project.link && (
										<a
											href={project.link}
											target="_blank"
											rel="noreferrer"
											className="text-secondary hover:text-primary transition-colors">
											<ExternalLink size={20} />
										</a>
									)}
								</div>

								<p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
									{project.type}
								</p>
								<h3 className="text-xl md:text-2xl font-bold text-light-text dark:text-white mb-4 group-hover/card:text-primary transition-colors">
									{project.title}
								</h3>
								<p className="text-sm md:text-base text-secondary dark:text-slate-400 leading-relaxed">
									{project.description}
								</p>
							</div>

							<div className="mt-8 flex flex-wrap gap-2">
								{project.tags.map((tag, i) => (
									<span
										key={i}
										className="text-[10px] md:text-xs font-medium px-3 py-1 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 rounded-lg border border-slate-100 dark:border-slate-700">
										#{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</motion.div>

				{/* Shadow Overlay untuk efek visual */}
				<div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-dark-bg to-transparent"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-dark-bg to-transparent"></div>
			</div>
		</section>
	);
};

export default Work;
