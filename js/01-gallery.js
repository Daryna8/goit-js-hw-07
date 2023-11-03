import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');
galleryListEl.addEventListener('click', onImgClick);


function galleryItemTemplate({preview, original, description}) {
    return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
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

let instance;

function onImgClick(event) {
    event.preventDefault()
    const url = event.target.dataset.source;
    
    instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
    `, {
    onShow: (instance) => {
            document.addEventListener('keydown', onEscPress);
        },
    onClose: (instance) => {
        document.removeEventListener('keydown', onEscPress);
      }, 
})
    instance.show()
}

function onEscPress(event) {
  if (event.key === 'Escape') {
    instance.close();
  }
}
