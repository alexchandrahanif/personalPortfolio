/** @format */

import React from 'react';
import { Copyright } from 'lucide-react';

const Footer = () => {
	// Mengambil tahun saat ini secara dinamis
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full bg-slate-50 dark:bg-dark-bg border-t border-slate-100 dark:border-slate-800 py-8 transition-colors duration-300">
			<div className="container mx-auto px-6 flex flex-col items-center justify-center gap-3">
				{/* Copyright Section */}
				<div className="flex items-center gap-2 text-secondary dark:text-slate-400">
					<Copyright
						size={16}
						className="text-primary"
					/>
					<p className="text-sm md:text-base font-medium font-inter">
						{currentYear} |{' '}
						<span className="text-light-text dark:text-white">
							Alex Chandra Hanif
						</span>
					</p>
				</div>

				{/* Tech Credits */}
				<p className="text-xs md:text-sm text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
					Designed and coded with
					<span className="text-red-500 animate-pulse text-lg">❤️</span>
					by Alex Chandra Hanif
				</p>

				{/* Floating Indicator (Optional decoration) */}
				<div className="mt-4 w-12 h-1 bg-primary/20 rounded-full overflow-hidden">
					<div className="w-1/2 h-full bg-primary animate-[move_2s_linear_infinite]"></div>
				</div>
			</div>

			{/* Style untuk animasi bar kecil di bawah */}
			<style jsx>{`
				@keyframes move {
					0% {
						transform: translateX(-100%);
					}
					100% {
						transform: translateX(200%);
					}
				}
			`}</style>
		</footer>
	);
};

export default Footer;
