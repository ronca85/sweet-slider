
var zInd = 1;
var currentItem = 0;
var zero = '';

if(document.querySelectorAll('.c-single-slider-nav__item').length < 10){
	zero = '0';
}
document.querySelector('#totalItems span').innerHTML = zero+document.querySelectorAll('.c-single-slider-nav__item').length;




var nextItem;

function goNextItem(){

	animEnCours = true;

	if(document.querySelectorAll('.unItem')[currentItem].nextElementSibling !== null){
		nextItem = currentItem + 1;
	}else{
		nextItem = 0;
	}

	TweenMax.to(document.querySelectorAll('.unItem')[currentItem], 0.8, {x:'100%', ease:Power4.easeInOut});
	TweenMax.to(document.querySelectorAll('.unItem')[currentItem].querySelector('div'), 0.8, {x:'-90%', ease:Power4.easeInOut});

	document.querySelectorAll('.unItem')[nextItem].style.zIndex = zInd++;

	TweenMax.fromTo(document.querySelectorAll('.unItem')[nextItem], 0.8, {x:'-100%'}, {x:'0%', ease:Power4.easeInOut});
	TweenMax.fromTo(document.querySelectorAll('.unItem')[nextItem].querySelector('div'), 0.8, {x:'90%'}, {x:'0%', ease:Power4.easeInOut, onComplete:function(){
		if(nextItem === 0){
			currentItem = 0;
		}else{
			currentItem++;
		}
		
		animEnCours = false;
	}});

	var lelmt;
	if(document.querySelector('.c-single-slider-nav__item.is-active').nextElementSibling !== null){
		lelmt = document.querySelector('.c-single-slider-nav__item.is-active');
		lelmt.nextElementSibling.classList.add('is-active');
		lelmt.classList.remove('is-active');
	}else{
		lelmt = document.querySelector('.c-single-slider-nav__item.is-active');
		lelmt.classList.remove('is-active');
		document.querySelectorAll('.c-single-slider-nav__item')[0].classList.add('is-active');
	}

	TweenMax.staggerTo('#tailleFixed span', 0.2, {y:'-100%', ease:Power2.easeIn}, 0.1, finNombre);
}


function goPrevItem(){

	animEnCours = true;

	if(document.querySelectorAll('.unItem')[currentItem].previousElementSibling !== null){
		nextItem = currentItem - 1;
	}else{
		nextItem = document.querySelectorAll('.unItem').length - 1;
	}

	TweenMax.to(document.querySelectorAll('.unItem')[currentItem], 0.8, {x:'-100%', ease:Power4.easeInOut});
	TweenMax.to(document.querySelectorAll('.unItem')[currentItem].querySelector('div'), 0.8, {x:'90%', ease:Power4.easeInOut});

	document.querySelectorAll('.unItem')[nextItem].style.zIndex = zInd++;

	TweenMax.fromTo(document.querySelectorAll('.unItem')[nextItem], 0.8, {x:'100%'}, {x:'0%', ease:Power4.easeInOut});
	TweenMax.fromTo(document.querySelectorAll('.unItem')[nextItem].querySelector('div'), 0.8, {x:'-90%'}, {x:'0%', ease:Power4.easeInOut, onComplete:function(){
		if(nextItem === document.querySelectorAll('.unItem').length - 1){
			currentItem = document.querySelectorAll('.unItem').length - 1;
		}else{
			currentItem--;
		}
		
		animEnCours = false;
	}});


	var lelmt;
	if(document.querySelector('.c-single-slider-nav__item.is-active').previousElementSibling !== null){
		lelmt = document.querySelector('.c-single-slider-nav__item.is-active');
		lelmt.previousElementSibling.classList.add('is-active');
		lelmt.classList.remove('is-active');
	}else{
		lelmt = document.querySelector('.c-single-slider-nav__item.is-active');
		lelmt.classList.remove('is-active');
		document.querySelectorAll('.c-single-slider-nav__item')[document.querySelectorAll('.c-single-slider-nav__item').length-1].classList.add('is-active');
	}

	TweenMax.staggerTo('#tailleFixed span', 0.2, {y:'100%', ease:Power2.easeIn}, 0.1, finNombre2);
}



function finNombre(){
	if(currentItem === document.querySelectorAll('.c-single-slider-nav__item').length - 1){
		document.getElementById('chiffre2').innerHTML = 1;
	}else{
		document.getElementById('chiffre2').innerHTML = currentItem+2;
	}
	TweenMax.staggerFromTo('#tailleFixed span', 0.2, {y:'100%'}, {y:'0%', ease:Power2.easeOut}, 0.1);
}



function finNombre2(){
	if(currentItem === 0){
		document.getElementById('chiffre2').innerHTML = document.querySelectorAll('.c-single-slider-nav__item').length;
	}else{
		document.getElementById('chiffre2').innerHTML = currentItem;
	}
	TweenMax.staggerFromTo('#tailleFixed span', 0.2, {y:'-100%'}, {y:'0%', ease:Power2.easeOut}, 0.1);
}



var currentSlide = 1;
var animEnCours = !1;
var grilleOvered = !1;

document.addEventListener("click", function(e) {
	if ( e.target.classList.contains("toNextItem") && !animEnCours ) goNextItem();
	else if ( e.target.classList.contains("toPrevItem") && !animEnCours ) goPrevItem();
});

