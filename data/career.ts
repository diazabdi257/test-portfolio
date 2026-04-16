export type CareerItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export const careerJourney: CareerItem[] = [
  {
    role: "Data Entry",
    company: "PT. PYX SOLUSI TEKNOLOGI",
    period: "November 2025 - Desember 2025",
    summary:
      "Bertanggung jawab atas akurasi input dan pembaruan lebih dari 70 dokumen fisik ke dalam basis data perusahaan. Mengaudit integritas data untuk mengidentifikasi dan mengoreksi inkonsistensi sebelum penyerahan akhir, serta menyusun laporan harian berbasis Microsoft Excel.",
  },
  {
    role: "Web Development Intern",
    company: "PT. Falcon Pictures",
    period: "July 2024 - August 2024",
    summary:
      "Membangun ulang arsitektur front-end platform Edufy menggunakan Next.js, React, dan Tailwind CSS. Ruang lingkup pekerjaan mencakup pengembangan komponen UI yang interaktif, serta integrasi REST API untuk menggerakkan fitur inti platform seperti manajemen akun pengguna dan data kursus.",
  },
];
