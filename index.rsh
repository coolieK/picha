'reach 0.1';
'use strict';

/**
 * Picha Backend
 */
export const main = Reach.App(() => {
  const ImgSave = Participant('ImgSave', {
    imgId: UInt,
    imgPart: UInt,
    imageValue: Bytes(800),
    comment: Bytes(128),
  });
  const ImageView = Participant('ImageView', {
    getImageId: Fun([UInt], Null),
    getImagePart: Fun([UInt], Null),
    getImageValue: Fun([Bytes(800)], Null),
    getImageComment: Fun([Bytes(128)], Null),
  });
  init();

  ImgSave.only(() => {
    const imgId = declassify(interact.imgId);
    const imgPart = declassify(interact.imgPart);
    const imageValue = declassify(interact.imageValue);
    const comment = declassify(interact.comment);
  });
  ImgSave.publish(imgId,imgPart,imageValue,comment);
  commit();


  ImageView.only(() => {
    interact.getImageId(imgId);
    interact.getImagePart(imgPart);
    interact.getImageValue(imageValue);
    interact.getImageComment(comment);
  });
  exit();
})