//animated scroll
    function checkScroll() {
    var animatedElements = document.querySelectorAll('.animated-element');
    for (var i = 0; i < animatedElements.length; i++){
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;
        
        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('visible');
        }
        
    }
}
window.addEventListener('scroll', checkScroll);