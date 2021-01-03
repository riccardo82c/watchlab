/* Const for Jumbo */
const jumboSlideArr = ['jumbo_img_1.png', 'jumbo_img_3.jpg', 'jumbo_img_2.png'];
let i = 1;

const currentImg = jumboSlideArr[i - 1];
const currentImgNext = jumboSlideArr[i];


const imageUrl = `./img/${currentImg}`;
const imageNextUrl = `./img/${currentImgNext}`;


const $jumbo = $('#jumbo');
const $jumboNext = $('#jumbo-next-img');


/* const imageUrl = './img/jumbotron_img.png';
const imageNextUrl = './img/jumbo_next.png'; */

$jumbo.css('background-image', 'url(' + imageUrl + ')');
$jumboNext.attr('src', imageNextUrl);

/* Next btn change Jumbo image */
$('#jumbo-next-btn').click(() => {
	changeJumbo();
});

/* Timing change Jumbo image */
let slideInterval = setInterval(() => {
	changeJumbo();
}, 30000);

/* Toggle next Jumbo image */
const $buttonNext = $('.jumbo__next__btn');


$buttonNext.mouseover(function () {
	$jumboNext.fadeToggle(300);
	$jumboNext.next().fadeToggle(300);
});

$buttonNext.mouseleave(function () {
	$jumboNext.fadeToggle(300);
	$jumboNext.next().fadeToggle(300);
});

function changeJumbo() {
	let index = (i++) % jumboSlideArr.length;
	let indexNext = (index + 1) % jumboSlideArr.length;

	const currentImg = jumboSlideArr[index];
	const currentImgNext = jumboSlideArr[indexNext];

	const imageUrl = `./img/${currentImg}`;
	const imageNextUrl = `./img/${currentImgNext}`;

	$jumbo.css('background-image', 'url(' + imageUrl + ')');
	$jumboNext.attr('src', imageNextUrl);
}