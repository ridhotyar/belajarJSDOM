const thumbnail = document.querySelector('.thumbnail')
const preview = document.querySelector('.imgprev')

thumbnail.addEventListener('click', function(e){
    if (e.target.className == 'thumb' ) {
        preview.src = e.target.src
    }
})