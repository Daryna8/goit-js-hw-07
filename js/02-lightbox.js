import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

function galleryItemTemplate({preview, original, description}) {
    return `<li class="gallery__item">
             <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
             </a>
            </li>`
}

function galleryItemsTemplate(galleryArr) {
    return galleryArr.map(galleryItemTemplate).join('');
}

function renderGallery(galleryArr) {
    const markup = galleryItemsTemplate(galleryArr);
    galleryListEl.insertAdjacentHTML('afterbegin', markup);
}

renderGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', capttionDelay: 250, });
