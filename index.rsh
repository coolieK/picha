'reach 0.1';
'use strict';

/**
 * Picha Backend
 */
export const main = Reach.App(() => {
  const A = Participant('AddPhoto', {
    photoId: UInt,
    ipfsHash: Bytes(128),
    comment: Bytes(128),
  });
  const V = Participant('ViewPhoto', {
    getPhotoId: Fun([UInt], Null),
    getIpfsHash: Fun([Bytes(128)], Null),
    getComment: Fun([Bytes(128)], Null),
  });
  init();

  A.only(() => {
    const photoId = declassify(interact.photoId);
    const ipfsHash = declassify(interact.ipfsHash);
    const comment = declassify(interact.comment);
  });
  A.publish(photoId,ipfsHash,comment);
  commit();


  V.only(() => {
    interact.getPhotoId(photoId);
    interact.getIpfsHash(ipfsHash);
    interact.getComment(comment);
  });
  exit();
})