function persent(input) {
    var x = input.value.split("*");
    var y = x[0];
    x = x[1];
    var s = x * y / 100;
    input.value = s;
}
function perсent(input) {
    var x = input.value.split("*");
    var s = ~x +1;
    input.value = s;
}

/*Modal*/
var btnOpen = document.getElementById('btn-open');
var modal = document.getElementById('wrapper-modal');
var overlay = document.getElementById('overlay');



btnOpen.addEventListener('click',function(){
  modal.classList.add('active');
  overlay.classList.add('active');
});

function closeModal(){
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click',closeModal);
