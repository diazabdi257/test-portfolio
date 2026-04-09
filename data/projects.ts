export type ProjectItem = {
  title: string;
  summary: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Booking GOR Mobile App",
    summary:
      "Aplikasi mobile untuk pemesanan lapangan dengan pemantauan ketersediaan real-time, sistem membership, integrasi payment gateway Midtrans, dan manajemen struktur data berbasis Firebase Realtime Database.",
    tags: ["Flutter", "Firebase", "Midtrans"],
    repoUrl: "https://github.com/diazabdi257/booking-gor-final",
    demoUrl: "https://",
  },
  {
    title: "Booking GOR Website",
    summary:
      "Website untuk pemesanan lapangan dengan pemantauan ketersediaan real-time, sistem membership, integrasi payment gateway Midtrans, dan manajemen struktur data berbasis Firebase Realtime Database.",
    tags: ["TypeScript", "Firebase", "Midtrans", "Realtime"],
    repoUrl: "https://github.com/andreanss/Websitegorcifut",
    demoUrl: "https://booking-gor.site/",
  },
  {
    title: "ValStore Checker Website",
    summary:
      "Website untuk memudahkan player memeriksa daily store valorant mereka tanpa harus login kedalam game",
    tags: ["Typescript", "API"],
    repoUrl: "https://github.com/diazabdi257/valorantstorecheckerwebsite",
    demoUrl: "https://valorantstorecheck.netlify.app/",
  },
];