import React from 'react';

export interface Project {
  title: string;
  desc: string;
  fullDesc: string;
  tech: string[];
  link: string;
  image: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  link: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Social {
  icon: React.ReactNode;
  link: string;
  label: string;
}
