	/* object array of data for press*/
	const pressArr = [

		{
			'url': 'slider_img_1.png',
			'date': '18 SETTEMBRE 2015',
			'title': 'Most Important Days on Watchlab'
		},
		{
			'url': 'slider_img_2.jpg',
			'date': '2 GENNAIO 2016',
			'title': 'Lorem ipsum dolor sit amet'
		},
		{
			'url': 'slider_img_3.jpg',
			'date': '20 MARZO 2016',
			'title': 'consec adipisicing elit repellat'
		},
		{
			'url': 'slider_img_4.jpg',
			'date': '4 AGOSTO 2017',
			'title': 'quidem animi seq numquam sit '
		},
		{
			'url': 'slider_img_5.jpg',
			'date': '19 GENNAIO 2018',
			'title': 'quib totam tempor expedita'
		},
		{
			'url': 'slider_img_6.jpg',
			'date': '27 DICEMBRE 2018',
			'title': 'nihil culpa similique aperiam'
		},
		{
			'url': 'slider_img_7.jpg',
			'date': '19 MAGGIO 2019',
			'title': 'Hic aut sapiente expedita'
		},
		{
			'url': 'slider_img_8.jpg',
			'date': '7 LUGLIO 2019',
			'title': 'Earum eius quibusdam quaerat'
		},
		{
			'url': 'slider_img_9.jpg',
			'date': '27 DICEMBRE 2020',
			'title': 'Iste ducimus quibusdam magni'
		},
	];


	/* counter */
	let i = 0;

	/* init DOM with array at pos 1 */
	setSliderData(i);

	/* at controller click pass direction to changeSlider fn */
	$('.slider__controller span').click(
		function (e) {
			const direction = e.currentTarget.className;
			changeSlider(direction);
		});

	/* function change to next/prev image and data, title */
	function changeSlider(dir) {

		if (dir == 'next') {
			i++;
			i == pressArr.length ? i = 0 : '';
		} else {
			i--;
			i < 0 ? i = pressArr.length - 1 : '';
		}
		/* init DOM with array at pos i  */
		setSliderData(i);
	}


	function setSliderData(index) {

		/* DOM constant */
		const $slider_img = $('#carousel-img');
		const $slider_date = $('#carousel-date');
		const $slider_title = $('#carousel-title');

		$slider_img.attr('src', `./img/${pressArr[index]['url']}`);
		$slider_date.text(pressArr[index]['date']);
		$slider_title.text(pressArr[index]['title']);
	}