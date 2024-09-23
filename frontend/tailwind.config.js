module.exports = {
  content: [
    './index.html',               // If you have an index.html file
    './src/**/*.{html,js,jsx,ts,tsx}', // All relevant file types in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
