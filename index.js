function cycy(){
    let loaders = document.querySelector('.loaders');
    loaders.addEventListener('click', function(){
        let cycy = document.querySelector('.cycy');
        cycy.style.display = '';
        setTimeout(function(){
            cycy.style.display = 'none';  
        },4.0 * 1000);
    });
}
cycy();

/*it's a load function giving my load button an iffect when load being pressed*/