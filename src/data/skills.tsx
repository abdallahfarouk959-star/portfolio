import { Skill } from '../types';

export const SKILLS: Skill[] = [
  {
    name: "React",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 841.9 595.3" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <g>
          <circle cx="420.9" cy="296.5" r="45.7" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeWidth="34">
            <ellipse rx="300" ry="100" cx="420.9" cy="296.5" transform="rotate(0 420.9 296.5)" />
            <ellipse rx="300" ry="100" cx="420.9" cy="296.5" transform="rotate(60 420.9 296.5)" />
            <ellipse rx="300" ry="100" cx="420.9" cy="296.5" transform="rotate(120 420.9 296.5)" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" fill="#3178C6" rx="16"/>
        <path d="M57.6 85.9V67.8H39v-8.9h46.7v8.9H66.9v18.1H57.6zm16.7 0v-8.3c4.1 2.3 8.3 3.4 12.6 3.4 3 0 5.4-.7 7.2-2.1 1.7-1.4 2.6-3.2 2.6-5.5 0-1.7-.5-3.1-1.6-4.2-1.1-1.1-2.6-2-4.5-2.6L85.2 65c-3.1-1-5.6-2.6-7.5-4.8s-2.8-5-2.8-8.5c0-3.6 1.3-6.6 4-9 2.7-2.4 6.3-3.6 10.9-3.6 4.1 0 8.1 1.1 12 3.2v8.1c-3.7-2.2-7.3-3.3-10.9-3.3-2.6 0-4.7.6-6.1 1.9s-2.1 3-2.1 5c0 1.6.5 2.9 1.5 3.9 1 1 2.5 1.9 4.3 2.5l5.5 1.7c3.4 1.1 6.1 2.7 8 4.8 2 2.1 2.9 5 2.9 8.5 0 3.8-1.4 7-4.1 9.5-2.7 2.5-6.5 3.7-11.4 3.7-4.7 0-9.2-1.1-13.6-3.2z" fill="#FFF"/>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path d="M93.6 102.6c-1.9 3.4-7.3 6.1-13.7 4.7-4.1-.9-6.7-3.6-7.9-6.1l6.9-3.9c.8 1.6 2.9 3.2 5.8 3.2 2.4 0 4-.9 4.9-2.9.9-2.3.4-4 -3.4-5.8-3.6-1.8-9.8-3.9-9.8-10.8 0-6.4 4.9-11.3 12.6-12.6 5.5-1 9.4-.3 12.9 2.3l-6.8 4.1c-1.5-1-3.2-1.4-6-1.4-2.7 0-4.4 1.1-5.1 2.9-.7 1.9-.4 3.9 3.3 5.8 6 2.8 10 4.9 10 11.1 0 7-5.5 11.3-12.9 12.6z" fill="#000" />
        <path d="M58.1 103c-2.9 0-4.7-1.4-5.6-3.1l6.7-3.9c.6 1 1.7 1.8 3.3 1.8 1.5 0 2.4-.7 2.4-3.4V58.1h8.5v36.1c0 8.7-5.1 12.8-14.3 12.8z" fill="#000" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12c4.67 0 7.33-4 12-4 2.67 0 4 1.5 4 1.5S18.33 12 14 12c-6 0-9-4-12-4z" fill="#06B6D4" />
        <path d="M2 18c4.67 0 7.33-4 12-4 2.67 0 4 1.5 4 1.5S18.33 18 14 18c-6 0-9-4-12-4z" fill="#7C3AED" />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.9 3.17 9.06 7.57 10.52.55.1.75-.24.75-.53v-1.86c-3.08.67-3.73-1.4-3.73-1.4-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.46-.28-5.05-1.23-5.05-5.47 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.42.11-2.96 0 0 .92-.29 3.02 1.13.88-.25 1.82-.38 2.76-.38.94 0 1.88.13 2.76.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.54.22 2.68.11 2.96.7.78 1.13 1.77 1.13 2.98 0 4.25-2.6 5.19-5.07 5.46.39.34.74 1.02.74 2.06v3.05c0 .29.2.64.76.53 4.4-1.46 7.57-5.62 7.57-10.52C23.25 5.48 18.27.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.9 83.2L19.2 60 41 81 22.9 83.2z" fill="#FFA000"/>
        <path d="M22.9 83.2L62.7 11.8c1-1.8 3.5-1.8 4.5 0l21.3 38.3-43 44.5-22.6-11.4z" fill="#F57C00"/>
        <path d="M109 84.9L88.5 50.1c-1-1.7-3.4-1.7-4.4.1L67 80.5l-21.5 22.1 13 12.5c3.2 3.1 8.3 3.1 11.5 0l39-30.2z" fill="#FFCA28"/>
        <path d="M45.5 102.6L67 80.5l17.1-29.3 24.9 33.7-63.5 17.7z" fill="#FFA000"/>
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#E44D26" d="M19 3l9 102 35 10 35-10 9-102H19z" />
        <path fill="#F16529" d="M64 116l28-8 7-78H64v86z" />
        <path fill="#EBEBEB" d="M64 54h14l1-11H64V32h30l-1 11H64v11zM64 86v-11h-18l-1 11v12l19 5v-17h0z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1572B6" d="M19 3l9 102 35 10 35-10 9-102H19z" />
        <path fill="#33A9DC" d="M64 116V32h31l-1 11H64v73l0 0z" />
        <path fill="#EBEBEB" d="M64 70h18l1-11H64V54h29l-1 11H64v11zM64 98v-11h-18l-1 11v12l19 5v-17z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M12 2c-2.21 0-4 1.79-4 4v1h8V6c0-2.21-1.79-4-4-4z" fill="#3776AB" />
        <path d="M6 8v2c0 2.21 1.79 4 4 4h4v-2c0-2.21-1.79-4-4-4H6z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2s7 2 7 5-7 6-7 6-7-3-7-6 7-5 7-5z" fill="#5382A1" />
        <path d="M16 13s9 0 9 4-9 7-9 7-9-4-9-7 9-4 9-4z" fill="#D24726" />
      </svg>
    ),
  },
];
