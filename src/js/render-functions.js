export const createGalleryCardTemplate = imgInfo => {
  return `<li class="gallery-card">
  <a href="${imgInfo.largeImageURL}" class="gallery-item">
    <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" title="" />
    <div class="gallery-info">
    <p>
    <span>Likes</span>
    <span>${imgInfo.likes}</span>
    </p>
        <p>
    <span>Views</span>
    <span>${imgInfo.views}</span>
    </p>
        <p>
    <span>Comments</span>
    <span>${imgInfo.comments}</span>
    </p>
       <p>
    <span>Downloads</span>
    <span>${imgInfo.downloads}</span>
    </p>
    </div>
    </a>
  </li>`;
};
