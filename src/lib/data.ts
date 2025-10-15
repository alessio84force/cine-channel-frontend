export type Cat = 'gamers'|'streamers'|'videobloggers'|'cineastas';
export type Item = { id:string; title:string; category:Cat; date:string; views:number; thumb:string };

export const SAMPLE_ITEMS: Item[] = [
  { id:'g1', title:'Pro Aim Academy', category:'gamers', date:'2025-09-20', views: 18200, thumb:'/categories/gamers.jpeg' },
  { id:'g2', title:'Retro 8-bit', category:'gamers', date:'2025-08-05', views:  5200, thumb:'/categories/gamers.jpeg' },
  { id:'s1', title:'Streaming IRL Madrid', category:'streamers', date:'2025-07-11', views:  9400, thumb:'/categories/streamers.jpeg' },
  { id:'s2', title:'Tech & Streams', category:'streamers', date:'2025-10-01', views: 12400, thumb:'/categories/streamers.jpeg' },
  { id:'v1', title:'Vlog en Ruta', category:'videobloggers', date:'2025-09-01', views:  3300, thumb:'/categories/videobloggers.jpeg' },
  { id:'v2', title:'Cocina y Cámara', category:'videobloggers', date:'2025-07-28', views:  8700, thumb:'/categories/videobloggers.jpeg' },
  { id:'c1', title:'Corto Express', category:'cineastas', date:'2025-08-20', views:  4100, thumb:'/categories/cineastas.jpeg' },
  { id:'c2', title:'Detrás de Escena', category:'cineastas', date:'2025-09-30', views:  9900, thumb:'/categories/cineastas.jpeg' },
  { id:'g3', title:'Speedrun Lab', category:'gamers', date:'2025-10-02', views:  6100, thumb:'/categories/gamers.jpeg' },
  { id:'s3', title:'LiveMix', category:'streamers', date:'2025-08-15', views: 15000, thumb:'/categories/streamers.jpeg' },
  { id:'v3', title:'City Vibes', category:'videobloggers', date:'2025-10-05', views:  4200, thumb:'/categories/videobloggers.jpeg' },
  { id:'c3', title:'Luz y Sonido', category:'cineastas', date:'2025-07-02', views:  2700, thumb:'/categories/cineastas.jpeg' },
];

export function slugify(t: string) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}
