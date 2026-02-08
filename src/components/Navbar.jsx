/** @format */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { logo } from '../assets';

const Navbar = () => {
	const [isDark, setIsDark] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Inisialisasi Dark Mode & Scroll Listener
	useEffect(() => {
		const savedTheme = localStorage.getItem('darkmode');
		if (savedTheme === 'dark') {
			document.documentElement.classList.add('dark');
			setIsDark(true);
		}

		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleDarkMode = () => {
		setIsDark(!isDark);
		if (!isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('darkmode', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('darkmode', 'light');
		}
	};

	const navLinks = [
		{ name: 'Profile', href: '#profile' },
		{ name: 'Skill', href: '#skill' },
		{ name: 'Experience', href: '#experience' },
		{ name: 'Work', href: '#work' },
		{ name: 'Contact', href: '#contact' },
	];

	const handleDownloadCv = () => {
		const fileUrl =
			'https://drive.google.com/file/d/1NgIA0fvTgTzRl2lja31tvqD0MQzmuVxr/view';
		window.open(fileUrl, '_blank');
	};

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
				scrolled
					? 'bg-white/70 dark:bg-dark-bg/70 backdrop-blur-xl shadow-lg py-3'
					: 'bg-transparent py-5'
			}`}>
			<div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
				{/* Brand/Logo */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					className="flex items-center gap-2 cursor-pointer group"
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
					<div className="relative">
						<img
							src={logo}
							alt="logo"
							className="h-10 w-10 relative z-10"
						/>
						<div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/40 transition-all"></div>
					</div>
					<span className="text-xl font-bold tracking-tight text-light-text dark:text-dark-text font-inter">
						Alex<span className="text-primary">Chandra</span>
					</span>
				</motion.div>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center gap-8">
					<ul className="flex items-center gap-8">
						{navLinks.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									className="text-sm font-medium text-secondary hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors relative group">
									{link.name}
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
								</a>
							</li>
						))}
					</ul>

					<div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>

					<div className="flex items-center gap-4">
						{/* Theme Toggle */}
						<button
							onClick={toggleDarkMode}
							className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:scale-110 active:scale-95 transition-all">
							{isDark ? <Sun size={20} /> : <Moon size={20} />}
						</button>

						{/* CV Download Button */}
						<button
							onClick={handleDownloadCv}
							className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 transition-all active:scale-95">
							<Download size={16} />
							<span>Resume</span>
						</button>
					</div>
				</div>

				{/* Mobile Toggle */}
				<div className="md:hidden flex items-center gap-4">
					<button
						onClick={toggleDarkMode}
						className="p-2 text-slate-600 dark:text-yellow-400">
						{isDark ? <Sun size={24} /> : <Moon size={24} />}
					</button>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="p-2 text-dark-bg dark:text-white">
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="absolute top-full left-0 w-full bg-white dark:bg-dark-bg border-b border-slate-100 dark:border-slate-800 shadow-xl md:hidden overflow-hidden">
						<div className="flex flex-col p-6 gap-4">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
									{link.name}
								</a>
							))}
							<hr className="border-slate-100 dark:border-slate-800" />
							<button
								onClick={handleDownloadCv}
								className="w-full flex justify-center items-center gap-3 bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20">
								<Download size={20} />
								Download CV
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
