/* ==========================================================================
   MAPINGUARI — Terror 2D amazônico
   Visual novel + exploração (WASD / setas / joystick), pulo, corrida,
   escuridão com lanterna, perseguição e finais ramificados.
   O roteiro fica em ROTEIRO (cenas, falas, escolhas).
   ========================================================================== */
(() => {
'use strict';

/* --------------------------------------------------------------------------
   CONFIGURAÇÃO
   -------------------------------------------------------------------------- */
const W = 400, H = 240;               // resolução interna (pixel art); o CSS amplia
const VEL_ANDAR = 60, VEL_CORRER = 100;
const PULO_DUR = 0.5, PULO_ALT = 14;

// Sprites do Alex (tiras de quadros FW x FH)
const FW = 32, FH = 35;
const SPR = {
  idle: { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAjCAYAAADCDAUrAAAgaklEQVR4Xu18eYxd13nf79z93rcv82Y4MxwOKS4SaZKyKKkiJWtka7W1VDZMBXDkuHAaA0HRwkUUFDUSyxzyn220RmoDURrDS+I2ZgrVjhK7qW2KtjZTpiVTFPdthrO+efty77vrKb7zZhjZdcQ3fG8CFOgPEColvszssnvc5nt98f+66Zefw9c2f/x/1m87+H3wfZs0f8//v1/iaee+oN/1rF88pOfxNvnZ9BEE9s2jeCF//bCP2v7gwDr5yM3HbgZqViMa1xGEET4+Ys/7+t7a8ETn3oCF89Pc8MwITEG1+2wzH1J3If7cOjQobV86oZA7V8+P8sNQweTgUa9zc68euKPvrUmPPsscOgQRnZNIJGI8TAKIIFB0wxsSU+wF17451mEE7t3IxO3eBhyeL4DjhZM02InXzuNKIrWNKQbwYEDB1CJKjwdjqGKJLTbLvvYIx/BqVOncfpuc46AYQvKYGvW2A1YF86cifiablyrgafAVs0W5uFzB1vYsUvCg8wz1c9+vPZ03h2ZgK8N1T//z8s386pAZm/N0E3XQ3U8rgHIl4pwPB9MUSFrBqDpKJVNrjvro/J1dC66560e9mG+cK788/QyP/5P80Y4dD75o4dC8H7aXw3c/v2D6VevHwHwP3d274H+f3e09vK611X10Y538e1tMv7f3A71NlE927YtLw35pA8c5x3/eN0Jq2bN74Lsec48fP76cK2sXwPz3b+c73/5/z9t37+72v7uOufX/AGWqZ5O3Fp0AAAAAElFTkSuQmCC', n: 6, fps: 6,  img: null },
  walk: { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAjCAYAAAB7PdRKAAAmt0lEQVR4Xr19CZCd11Xmd//97UvvarVabkmWtVtuWZIt2y0vskXwMnGQIYRgwpIQasBACAU1ECGosKiGE8jADEN5DIwhBTNWMpNgQ2LFWzuOnWArXrRYa0u9d7/Xb1/+96936tzXT+XYkvy69V4+l8uqbznenvvu/zPu/9gGmgZn4drWyqpA0L62llpWsaLRUHm89m/WJJbcpF4pGf1qJj2bN74Lsec48fP76e3KugB8P751rVnL3uM/f3e09vK611X10Y538e1tMv7f3A71NlE927YtLw35pA8c5x3/eN0Jq2bN74Lsec48fP76cK2sXwPz3b+c73/5/z9t37+72v7uOufX/AGWqZ5O3Fp0AAAAAElFTkSuQmCC', n: 8, fps: 10, img: null },
  run:  { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAjCAYAAAB7PdRKAAAw1ElEQVR4Xu19CXSeV3nmc7/13zdJv3ZZliVZli3vjtfYzkZMSCAUDCEp0MAAhYHSNNDMwAyOU9oOpZzATKE0Q0iBBto4kITgJDiOGz69v4LsoH8/vP7zv6/A8xg69+Kbbp960axCypnMDGsyqBWhB3P7xfeyvfne/0F4AzO8LEgsPUXvEu2+Xn89m/WJJbcpF4pGf1qJj2bN74Lsec48fP76e3KugB8P751rVnL3uM/f3e09vK611X10Y538e1tMv7f3A71NlE927YtLw35pA8c5x3/eN0Jq2bN74Lsec48fP76cK2sXwPz3b+c73/5/z9t37+72v7uOufX/AGWqZ5O3Fp0AAAAAElFTkSuQmCC',  n: 8, fps: 14, img: null }
};

// ... (o restante da lógica e das funções do script continua aqui)
})();
