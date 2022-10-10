
let container_wrapper = document.querySelector('.container-wrapper');
let white_cover = document.getElementById('white-cover');
let black_cover = document.getElementById('black-cover');
let container = document.getElementById('container')
let first_btn = document.getElementById('first-btn');
let show_btn = document.getElementById('show-btn');
let clear = document.querySelector('.clear');
let back = document.querySelector('.back');
let equal_to = document.querySelector('.equal-to');
let result = document.getElementById('result');
let btn = document.getElementById('btn');

let thank_you = document.getElementById('thank-you');

let designed_by = document.getElementById('designed-by');
let after_done = document.getElementById('after-done');



// ------------------ function for show calculator -------------------------------
show_btn.addEventListener('click', function () {
    first_btn.style.display = 'none';
    container.style.animationPlayState = 'running';
    white_cover.style.animationPlayState = 'running';
    black_cover.style.animationPlayState = 'running';
    black_cover.addEventListener('animationend', function () {
        designed_by.style.animationPlayState = 'running';
        after_done.style.animationPlayState = 'running';
    })

});
// -----------------------  do it latter ----------------------------------
// thank_you.addEventListener('click', function () {
//     first_btn.style.display = 'none';
//     container.style.animation = 'scaleContainer 1s ease';
//     white_cover.style.animation = 'animatWhite 4s ease';
//     black_cover.style.animation = ' animatBlack 4s ease';
//     black_cover.addEventListener('animationend', function(){
//         designed_by.style.animation = 'designedAnimation 2s linear';
//         after_done.style.animation = 'afterDoneAnimation 2s linear';
//     })

// });
// ----------------------- / do it latter ----------------------------------

after_done.addEventListener('click', function () {
    white_cover.style.animation = 'reversAnimatwhite 4s ease';
    black_cover.style.animation = 'reversAnimatBlack 4s ease';
    container.style.animation = 'reverseScaleContainer 4.5s ease';
    designed_by.style.animation = 'reverseDesigAnimation .3s ease-out';
    after_done.style.animation = 'reversAfterDoneAnimation .3s ease-out';
    show_btn.style.display = 'none';
    thank_you.style.display = 'block';

    container.addEventListener('animationend', function () {
        container.style.opacity = '0';
    });
    designed_by.addEventListener('animationend', function () {
        designed_by.style.opacity = '0';
        after_done.style.opacity = '0';
        designed_by.style.left = '30rem';
        after_done.style.right = '35rem';
    });
    black_cover.addEventListener('animationend', function () {
        white_cover.style.top = '-15rem';
        black_cover.style.bottom = '-20rem';
        container.style.scale = '0';
        first_btn.style.display = 'block';
    });

});

let initial_value = "";
// --------------------- function for  update number and operator ----------------------
initial_value = "";
function displayMore(btn_value) {
    let text = btn_value;
    initial_value += text;
    result.innerHTML = initial_value;
}

// --------------------- function for BACK ----------------------
back.addEventListener('click', function () {
    result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
    initial_value = result.innerHTML;
});

// --------------------- function for equal-to button  ----------------------
equal_to.addEventListener('click', function () {
    result.innerHTML = "Ans  :  " + eval(result.innerHTML);
    initial_value = result.innerHTML.substring(7);
});
// --------------------- function for clear display  ----------------------
clear.addEventListener('click', function () {
    initial_value = "0";
    result.innerHTML = initial_value;
});
