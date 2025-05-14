// tailwind.config.js


  
  export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // adjust as needed
    ],
    darkmode: 'class', // Enable dark mode support
    theme: {
      container: {
        center: true,
        padding: '1rem',
        screens: screens, // use the screen object here
      },
      screens: screens, // you can optionally reuse it in theme.screens too
      extend: {},
     
      animation: {
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '0.5' },
        },
      },
    },
    plugins: [],
  };
  // This configuration file sets up Tailwind CSS with custom screen sizes for responsive design.