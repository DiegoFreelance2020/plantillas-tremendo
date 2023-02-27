const gallery = document.querySelector('.proyectos-plantilla-2 .gallery')

if(gallery){
    if(gallery.querySelectorAll('.gallery__item').length < 3){
        gallery.classList.add('grid-2-columns')
    }
}