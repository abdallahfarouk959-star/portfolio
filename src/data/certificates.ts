import { Certificate } from '../types';
import certificate1 from '../assets/certificate1.png';
import certificate2 from '../assets/certificate2.png';
import dandrah from '../assets/Dandrah.png';
import Front from '../assets/Developing-Front-End-Apps-with-React.png';
import gitGithub from '../assets/git-github.png';
import introToHtmlCssJs from '../assets/intro-to-HTMl-CSS-JS.png';

export const CERTIFICATES: Certificate[] = [
  {
    title: "Advanced Front-End Using React",
    issuer: "Dandara Al-Ibdaa",
    link: "https://dandara-alebdaa.com/verify-certificate/CERT-MLWD33EW-6TK76N",
    image: dandrah,
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/W6KRZQFJRH6K",
    image: Front,
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/S8WYF44Q7WEV",
    image: certificate1,
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/KCV10OTL6FK9",
    image: certificate2,
  },
  {
    title: "Getting Started with Git and GitHub",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/records/IATGDK20DXFP",
    image: gitGithub,
  },
  {
    title: "Introduction to HTML, CSS, and JavaScript",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/A6CLFJ48BRSA",
    image: introToHtmlCssJs,
  },
];
