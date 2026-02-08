/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,jsx}'],
	mode: 'jit',
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				// Biru Utama (Aksen)
				primary: {
					light: '#60a5fa', // Blue 400
					DEFAULT: '#3b82f6', // Blue 500
					dark: '#2563eb', // Blue 600
				},
				// Warna Background & Teks
				dark: {
					bg: '#020617', // Slate 950 (Sangat gelap/profesional)
					card: '#0f172a', // Slate 900
					text: '#f1f5f9', // Slate 100
				},
				light: {
					bg: '#f8fafc', // Slate 50
					card: '#ffffff',
					text: '#0f172a', // Slate 900
				},
				// Warna Pendukung
				secondary: '#64748b', // Slate 500
				accent: '#0ea5e9', // Sky 500
			},
			boxShadow: {
				premium: '0 0 50px -12px rgba(59, 130, 246, 0.25)', // Glow biru halus
			},
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1024px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
};
