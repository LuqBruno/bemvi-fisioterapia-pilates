import type { NextConfig } from 'next';

// GitHub Pages publica este projeto em uma subpasta. Mantemos a prévia local
// na raiz e ativamos o caminho somente durante o build do Pages.
const isPagesBuild = process.env.GITHUB_ACTIONS === 'true';
const config: NextConfig = {
  output: 'export',
  basePath: isPagesBuild ? '/bemvi-fisioterapia-pilates' : '',
  assetPrefix: isPagesBuild ? '/bemvi-fisioterapia-pilates/' : undefined,
  images: { unoptimized: true },
  devIndicators: false,
};
export default config;
