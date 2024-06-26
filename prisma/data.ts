import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function load() {
  try {
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
  await prisma.$executeRaw`INSERT INTO public.badges(id_badge, slug, name, image) VALUES
  ('1','cda','Cidade Alta','https://cidadealtarp.com/imagens/challenge/cidade-alta.png'),
  ('2', 'cda-valley','Cidade Alta Valley','https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png'),
  ('3', 'policia','Policia do Cidade Alta','https://cidadealtarp.com/imagens/challenge/policia.png'),
  ('4', 'hospital','Hospital do Cidade Alta','https://cidadealtarp.com/imagens/challenge/hospital.png'),
  ('5', 'mecanica','Mecânica do Cidade Alta','https://cidadealtarp.com/imagens/challenge/mecanica.png'),
  ('6', 'taxi','Taxi do Cidade Alta','https://cidadealtarp.com/imagens/challenge/taxi.png'),
  ('7', 'curuja','Coruja','https://cidadealtarp.com/imagens/challenge/coruja.png'),
  ('8', 'hiena','Hiena','https://cidadealtarp.com/imagens/challenge/hiena.png'),
  ('9', 'gato','Gato','https://cidadealtarp.com/imagens/challenge/gato.png'),
  ('10', 'urso','Urso','https://cidadealtarp.com/imagens/challenge/urso.png');`;
}

load();
