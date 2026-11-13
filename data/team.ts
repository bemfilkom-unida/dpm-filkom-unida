export interface TeamMember {
  name: string
  role: string
  photo: string
}

export const team: TeamMember[] = [
  { name: 'M Maulana Ahdan', role: 'KETUA', photo: '/ahdan.webp' },
  { name: 'Achmad Suherman', role: 'WAKIL KETUA', photo: '/ahmad.webp' },
  { name: 'S Raudha Al Zahra', role: 'SEKRETARIS', photo: '/zahra.webp' },
  { name: 'Anggun Rahmadani', role: 'BENDAHARA', photo: '/anggun.webp' },
]
