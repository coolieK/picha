import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();

const owner = await stdlib.newTestAccount(stdlib.parseCurrency(100));


const ctcPhotos = owner.contract(backend);


console.log(`---------------->[💾 Saving the photo 💾] ---------------->`);
  await Promise.all([
    ctcPhotos.p.AddPhoto({
      photoId: 1,
      ipfsHash: "QmYWYsL1qLEfB5P9fsMYrWYW1xJ36RMfmYdzCerBfuKBdX",
      comment: 'Diani Beach Kenya',
    }),
  ]);


console.log(`<----------------[📷 Getting the photo 📷 ] <----------------`);
  await Promise.all([
    ctcPhotos.p.ViewPhoto({
      getPhotoId: (photoId) => {console.log(`PhotoId: ${photoId}`)},
      getIpfsHash: (ipfsHash) => {console.log(`IpfsHash: ${ipfsHash}`)},
      getComment: (comment) => {console.log(`Comment: ${comment}`)},
    }),
  ]);
