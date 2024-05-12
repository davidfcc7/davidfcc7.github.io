// Este es un script completo que deberías ejecutar en el entorno de Node.js
const fs = require('fs');
const SVGIcons2SVGFontStream = require('svgicons2svgfont');
const svg2ttf = require('svg2ttf');
const ttf2eot = require('ttf2eot');
const ttf2woff = require('ttf2woff');
const ttf2woff2 = require('ttf2woff2');
const path = './public/icons/icon.json';  // Asegúrate de que la ruta al archivo JSON es correcta
const cssFilePath = './src/scss/_icon.scss';  // Ruta donde quieres guardar tu archivo CSS

const fontName = 'icon';
const svgFontStream = new SVGIcons2SVGFontStream({
  fontName: fontName,
  normalize: true,
  fontHeight: 1000
});

const output = fs.createWriteStream(`./public/icons/${fontName}.svg`);
svgFontStream.pipe(output);

let startUnicode = 0xE001;
const iconData = [];

fs.readdirSync('./src/svg/').forEach(file => {
    if (file.endsWith('.svg')) {
        const glyph = fs.createReadStream(`./src/svg/${file}`);
        const unicodeCharacter = String.fromCharCode(startUnicode);
        const unicodeHex = "0x" + startUnicode.toString(16);
        glyph.metadata = { unicode: [unicodeCharacter], name: file.replace('.svg', '') };
        iconData.push({ name: glyph.metadata.name, unicode: unicodeHex });
        svgFontStream.write(glyph);
        startUnicode++;
    }
});

svgFontStream.end();

output.on('finish', function() {
  const ttf = svg2ttf(fs.readFileSync(`./public/icons/${fontName}.svg`, 'utf8'), {});
  fs.writeFileSync(`./public/icons/${fontName}.ttf`, Buffer.from(ttf.buffer));
  const eot = ttf2eot(new Uint8Array(ttf.buffer));
  fs.writeFileSync(`./public/icons/${fontName}.eot`, Buffer.from(eot.buffer));
  const woff = ttf2woff(new Uint8Array(ttf.buffer), {});
  fs.writeFileSync(`./public/icons/${fontName}.woff`, Buffer.from(woff.buffer));
  const woff2 = ttf2woff2(new Uint8Array(ttf.buffer));
  fs.writeFileSync(`./public/icons/${fontName}.woff2`, Buffer.from(woff2.buffer));
  fs.writeFileSync(`./public/icons/${fontName}.json`, JSON.stringify(iconData, null, 2));
});



// Leer el archivo JSON que contiene los datos de los íconos
fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the icons file:', err);
    return;
  }

  const icons = JSON.parse(data);
  const styles = icons.map(icon => {
    // Genera una regla CSS por cada ícono
    // Asegúrate de que el unicode se transforme correctamente para CSS
    return `.icon-${icon.name}::before { content: "${icon.unicode.replace('0x', '\\')}"; }`;
  }).join('\n');

  // Escribir el CSS a un nuevo archivo
  fs.writeFile(cssFilePath, styles, (err) => {
    if (err) {
      console.error('Error writing the CSS file:', err);
    } else {
      console.log('CSS file was successfully generated!');
    }
  });
});
