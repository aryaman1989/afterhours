
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				afterhours: {
					crimson: '#7D1423',
					blue: '#1B94C4',
					purple: '#382B59',
					darkpurple: '#1E1A2B',
					black: '#020203',
					neon: '#FF0084'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '0.8',
						boxShadow: '0 0 15px rgba(255, 0, 132, 0.5)'
					},
					'50%': { 
						opacity: '1',
						boxShadow: '0 0 30px rgba(255, 0, 132, 0.8)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-500px 0',
					},
					'100%': {
						backgroundPosition: '500px 0',
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'star-pulse': {
					'0%, 100%': { 
						opacity: '0.5',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.2)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'star-pulse': 'star-pulse 3s ease-in-out infinite'
			},
			backgroundImage: {
				'cosmic-gradient': 'linear-gradient(to bottom, #020203, #1E1A2B)',
				'neon-glow': 'linear-gradient(90deg, #7D1423, #FF0084, #1B94C4)',
				'thought-card': 'linear-gradient(135deg, rgba(27, 148, 196, 0.1), rgba(56, 43, 89, 0.1))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
