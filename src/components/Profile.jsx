/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import { alex2 } from '../assets'; // Pastikan path asset benar

const Profile = () => {
	const handleGithub = () => {
		window.open('https://github.com/Alexchandrahanif', '_blank');
	};

	// Varian Animasi
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.3 },
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	};

	return (
		<section
			id="profile"
			className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300 pt-20">
			{/* Efek Dekoratif Background (Glow) */}
			<div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
			<div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[100px] -z-10" />

			<div className="container mx-auto px-6 md:px-12">
				<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
					{/* Sisi Kiri: Teks Content */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="flex flex-col gap-8 lg:w-3/5">
						<div className="flex flex-col gap-4">
							<motion.h1
								variants={itemVariants}
								className="text-4xl md:text-6xl font-bold font-poppins text-light-text dark:text-dark-text leading-tight">
								Hi, I'm <span className="text-primary">Alex</span>{' '}
								<span className="inline-block animate-bounce">👋</span>
							</motion.h1>

							<motion.p
								variants={itemVariants}
								className="text-base md:text-lg text-secondary dark:text-slate-400 max-w-2xl leading-relaxed font-inter">
								I'm a{' '}
								<span className="text-light-text dark:text-white font-semibold underline decoration-primary/50 underline-offset-4">
									Fullstack JavaScript Developer
								</span>{' '}
								specializing in backend development. I excel in building robust
								server-side applications, designing efficient APIs, and
								implementing scalable databases, while crafting user-centric
								frontend interfaces.
							</motion.p>
						</div>

						{/* Info Lokasi & Status */}
						<motion.div
							variants={itemVariants}
							className="flex flex-col gap-3">
							<div className="flex items-center gap-3 group">
								<MapPin
									size={20}
									className="text-primary group-hover:scale-120 transition-transform"
								/>
								<span className="text-secondary dark:text-slate-300 font-medium">
									Jakarta, Indonesia
								</span>
							</div>
							<div className="flex items-center gap-3 group">
								<div className="relative">
									<div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
									<div className="w-3 h-3 bg-green-500 rounded-full relative"></div>
								</div>
								<span className="text-secondary dark:text-slate-300 font-medium ml-1">
									Available for new projects
								</span>
							</div>
						</motion.div>

						{/* Social Media & CTA */}
						<motion.div
							variants={itemVariants}
							className="flex items-center gap-5">
							<button
								onClick={handleGithub}
								className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-white hover:text-primary dark:hover:text-primary hover:-translate-y-1 transition-all">
								<Github size={24} />
							</button>
							<a
								href="https://www.linkedin.com/in/alex-chandra-hanif-aa9955236/"
								target="_blank"
								rel="noreferrer"
								className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-white hover:text-primary dark:hover:text-primary hover:-translate-y-1 transition-all">
								<Linkedin size={24} />
							</a>
							<a
								href="#"
								className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-white hover:text-primary dark:hover:text-primary hover:-translate-y-1 transition-all">
								<Twitter size={24} />
							</a>
						</motion.div>
					</motion.div>

					{/* Sisi Kanan: Foto Profile */}
					{/* Sisi Kanan: Foto Profile */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className="lg:w-2/5 flex justify-center items-center relative">
						{/* Container Utama dengan Hover Group */}
						<motion.div
							className="relative z-10 group"
							whileHover="hover" // Memicu varian "hover" pada semua anak elemen
						>
							{/* Bingkai Foto Geometris (Berputar saat hover) */}
							<motion.div
								variants={{
									hover: { rotate: 12, scale: 1.05 },
								}}
								className="absolute inset-0 bg-primary rotate-6 rounded-2xl -z-10 opacity-20 transition-all duration-500"></motion.div>

							{/* Foto Utama (Zoom in & Shadow menguat saat hover) */}
							<motion.img
								src={alex2}
								alt="Alex Chandra Hanif"
								variants={{
									hover: {
										scale: 1.02,
										shadow: '0px 20px 30px rgba(0,0,0,0.2)',
									},
								}}
								className="w-[280px] h-[340px] md:w-[320px] md:h-[400px] object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-slate-800 transition-all duration-500"
							/>

							{/* Floating Badge (Bergeser atau Muncul saat hover) */}
							<motion.div
								variants={{
									hover: { x: 10, y: -5 },
								}}
								animate={{ y: [0, -10, 0] }} // Animasi melayang tetap jalan
								transition={{
									y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
									default: { duration: 0.3 },
								}}
								className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-premium border border-slate-100 dark:border-slate-700 hidden md:block">
								<div className="flex items-center gap-3">
									<div className="bg-primary/10 p-2 rounded-lg text-primary">
										<Globe size={20} />
									</div>
									<div>
										<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
											Experience
										</p>
										<p className="text-sm font-bold dark:text-white italic">
											Fullstack Developer
										</p>
									</div>
								</div>
							</motion.div>
						</motion.div>

						{/* Lingkaran Dekorasi belakang foto (Berdenyut saat hover) */}
						<motion.div
							variants={{
								hover: { scale: 1.1, opacity: 0.5 },
							}}
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/20 rounded-full -z-20 transition-all duration-700"></motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
