/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import {
	expressjs,
	figma,
	git,
	javascript,
	mongo,
	nextjs,
	nodejs,
	postgresql,
	rjs,
	tailwindcss,
	typescript,
} from '../assets';

const skills = [
	{ name: 'JavaScript', icon: javascript },
	{ name: 'TypeScript', icon: typescript },
	{ name: 'React.js', icon: rjs },
	{
		name: 'Angular',
		icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg',
	},
	{ name: 'Next.js', icon: nextjs },
	{ name: 'Node.js', icon: nodejs },
	{ name: 'Express.js', icon: expressjs },
	{ name: 'MongoDB', icon: mongo },
	{ name: 'PostgreSQL', icon: postgresql },
	{ name: 'Tailwind CSS', icon: tailwindcss },
	{ name: 'Git', icon: git },
	{ name: 'Figma', icon: figma },
];

const Skill = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5 },
		},
	};

	return (
		<section
			id="skill"
			className="w-full py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
			<div className="container mx-auto px-6 md:px-12">
				{/* Header Section */}
				<div className="flex flex-col items-center mb-16">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-bold text-sm mb-4">
						Skills
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text text-center mb-4">
						Technologies I <span className="text-primary">Master</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-secondary dark:text-slate-400 text-center max-w-xl">
						The tools, languages, and frameworks that I use to bring digital
						ideas to life.
					</motion.p>
				</div>

				{/* Skills Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-8 md:gap-12 justify-items-center">
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{ y: -10, scale: 1.05 }}
							className="flex flex-col items-center group">
							<div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-3 md:p-4 bg-light-bg dark:bg-slate-800/50 rounded-2xl border border-transparent group-hover:border-primary/30 group-hover:shadow-premium transition-all duration-300">
								<img
									src={skill.icon}
									alt={skill.name}
									className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
								/>
							</div>
							<p className="mt-4 text-xs md:text-sm font-semibold text-secondary dark:text-slate-400 group-hover:text-primary transition-colors">
								{skill.name}
							</p>
						</motion.div>
					))}
				</motion.div>

				{/* Background Decoration */}
				<div className="flex justify-center mt-20">
					<div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
				</div>
			</div>
		</section>
	);
};

export default Skill;
