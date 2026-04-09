export type SkillItem = {
  name:
    | "ReactJS"
    | "Typescript"
    | "MYSQL"
    | "Python"
    | "Figma"
    | "Adobe Premier Pro"
    | "Canva"
    | "Javascript";
  logoSrc: string;
};

export const skills: SkillItem[] = [
  { name: "ReactJS", logoSrc: "/images/skills/reactjs-icon.svg" },
  {
    name: "Typescript",
    logoSrc: "/images/skills/typescript-icon.svg",
  },
  { name: "MYSQL", logoSrc: "/images/skills/mysql-icon.svg" },
  { name: "Python", logoSrc: "/images/skills/python-icon.svg" },
  { name: "Figma", logoSrc: "/images/skills/figma-icon.svg" },
  {
    name: "Adobe Premier Pro",
    logoSrc: "/images/skills/adobe-premier-pro-icon.svg",
  },
  { name: "Canva", logoSrc: "/images/skills/canva-icon.svg" },
  { name: "Javascript", logoSrc: "/images/skills/javascript-icon.svg" },
];
