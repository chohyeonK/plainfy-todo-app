// tailwind.config.js
export default {
  content: [
    "./index.html",  // 꼭 포함되어야 함
    "./src/**/*.{js,ts,jsx,tsx}", // src 내부의 모든 컴포넌트 적용
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};