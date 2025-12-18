import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted-foreground))",
          foreground: "hsl(var(--muted-foreground))",
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",
        "surface-dark": "hsl(var(--surface-dark))",
        "surface-card": "hsl(var(--surface-card))",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
      },
      boxShadow: {
        'glass': '0 4px 24px rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'cyan-glow': '0 0 20px rgba(0, 217, 255, 0.3)',
        'cyan-glow-strong': '0 0 32px rgba(0, 217, 255, 0.5)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
      },
      animation: {
        'pulse-cyan': 'pulse-cyan 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
