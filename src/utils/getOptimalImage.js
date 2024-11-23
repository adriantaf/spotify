function getOptimalImage(arrImages) {
  if (Array.isArray(arrImages)) {
    if (arrImages.filter(img => img.width > 250)[0]) {
      return arrImages.filter(img => img.width > 250)[0].url;
    }
    return arrImages[0] ? arrImages[0].url : null;
  } else {
    return arrImages ? arrImages.url : null;
  }
}

export default getOptimalImage;