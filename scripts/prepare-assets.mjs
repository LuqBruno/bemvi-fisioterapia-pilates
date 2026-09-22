import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
await mkdir('public/images', {recursive:true});
// Recorte determinístico da marca oficial: preserva desenho, letras e proporções.
const logoMask = await sharp('materials/originals/marca-oficial.jpg').extract({left:260,top:800,width:940,height:310}).grayscale().median(5).threshold(125).resize({width:600}).toBuffer();
const logoInfo = await sharp(logoMask).metadata();
await sharp({create:{width:logoInfo.width,height:logoInfo.height,channels:3,background:'#f3eee4'}}).joinChannel(logoMask).webp({lossless:true}).toFile('public/images/bemvi-logo.webp');
await sharp('materials/adriana-retrato-tratado.png').resize({width:900,withoutEnlargement:true}).webp({quality:88}).toFile('public/images/adriana-retrato.webp');
// Enquadramento somente da profissional; paciente e textos ficam fora da imagem.
await sharp('materials/originals/avaliacao-oficial.jpg').extract({left:100,top:450,width:790,height:880}).resize({width:640}).webp({quality:87}).toFile('public/images/adriana-na-bemvi.webp');
console.log('Assets otimizados, originais preservados.');
