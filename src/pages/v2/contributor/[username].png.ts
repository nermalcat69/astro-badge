import type { APIContext, EndpointOutput } from 'astro';
import { Resvg } from '@resvg/resvg-js';
import { get as getSvg } from './[username].svg';
export { getStaticPaths } from './[username].svg';

export async function get(ctx: APIContext): Promise<EndpointOutput> {
  const { body: svg } = await getSvg(ctx);
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'zoom', value: 1200 / 260 },
    font: {
      loadSystemFonts: false,
      fontDirs: ['./src/fonts'],
      defaultFontFamily: 'Inter Tight',
      monospaceFamily: 'IBM Plex Mono',
    },
  });
  return {
    body: resvg.render().asPng(),
    encoding: 'binary',
  };
}
