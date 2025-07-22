window.onload = function() {

    const slider = document.getElementById('slider');
    const imgContainer = document.getElementById('img_container');

    let idx = slider.value;
    let sliderWidth = imgContainer.clientWidth;
    let moveAmount = idx * sliderWidth;

    function sliderChange () {
        idx = slider.value;
        moveAmount = idx * sliderWidth;
        console.log(moveAmount);
    }    

    slider.onchange = (e) => sliderChange();

    document.addEventListener('resize', (e) => {
        sliderWidth = imgContainer.clientWidth;
        moveAmount = idx * sliderWidth;
        imgContainer.style.transform = `translateX(-${moveAmount}px)`;
    })

    document.addEventListener('click', (e) => {
        e.preventDefault();
        imgContainer.style.transform = `translateX(-${moveAmount}px)`;
    });
}