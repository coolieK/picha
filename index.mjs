import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { imgBase64String } from './image.js';

const stdlib = loadStdlib();

const imageOwner = await stdlib.newTestAccount(stdlib.parseCurrency(100));


const ctcImage = [];

const stringToChunks = (str, chunkSize) => {
  const chunks = [];
  while (str.length > 0) {
    chunks.push(str.substring(0, chunkSize));
    str = str.substring(chunkSize, str.length);
  }
  return chunks
}


console.log(`---------------->[💾 Saving the image 💾] ---------------->`);

let imgChunks = stringToChunks(imgBase64String, 800);
console.log(`Chunk length: ${imgChunks.length}`);
console.log(`Please wait ...`);

for (var i = 0; i < imgChunks.length; i++) {
  ctcImage[i] = imageOwner.contract(backend);
  await Promise.all([
    ctcImage[i].participants.ImgSave({
      imgId: 1,
      imgPart: i,
      imageValue: imgChunks[i],
      comment: 'Reach logo',
    }),
  ]);
  //console.log(`Chunk: ${i} saved!`);
}


console.log(`<----------------[📷 Getting the image📷 ] <----------------`);
var imageValueFromNetwork = '';
for (var i = 0; i < imgChunks.length; i++) {
  await Promise.all([
    ctcImage[i].p.ImageView({
      getImageId: (imgId) => {},
      getImagePart: (imgPart) => {},
      getImageValue: (imgValue) => {
        imageValueFromNetwork = imageValueFromNetwork + imgValue;
      },
      getImageComment: (imgComment) => {},
    }),
  ]);
}
console.log(`******Image base64 string from the network******\n ${imageValueFromNetwork}`)
