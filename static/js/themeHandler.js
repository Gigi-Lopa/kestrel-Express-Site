document.addEventListener('scroll', e=>{
    console.log(this.screenY)
    if(this.scrollY >= 164){
        HEADER.classList.add('fixed-top')
    }
    else{
        HEADER.classList.remove('fixed-top')
    }
})