export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  summary: string;
  proofPdf: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  year: string;
  summary: string;
  proofPdf: string;
};

export const educationHistory: EducationItem[] = [
  {
    degree: "S1 Teknik Komputer",
    institution: "Universitas Telkom",
    period: "2021 - 2025",
    gpa: "3.34 / 4.00",
    summary:
      "Fokus pada pengembangan web, rekayasa perangkat lunak, dan manajemen basis data melalui proyek akademik serta kolaborasi tim.",
    proofPdf: "/cv-diaz-abdi.pdf",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "React Developer Fundamentals",
    issuer: "Dicoding",
    year: "2024",
    summary:
      "Memahami komponen, state management dasar, dan praktik pengembangan antarmuka React modern.",
    proofPdf: "/cv-diaz-abdi.pdf",
  },
  {
    title: "Database Design Essentials",
    issuer: "MySkill",
    year: "2023",
    summary:
      "Mempelajari normalisasi database, relasi tabel, dan optimasi query untuk kebutuhan aplikasi.",
    proofPdf: "/cv-diaz-abdi.pdf",
  },
];
