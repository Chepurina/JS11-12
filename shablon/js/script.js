$(function() {
	var headHtml = $("#head").html(); 
	var myData = 
	[
	'Чепурина Галина Павловна',
	'img/image.jpg',
	'Контент-менеджер Интернет-Билет'
	];
		
	var block1 = tmpl(headHtml, { 
	data: myData  
	});

	$('body').append(block1);

	var listHtml = $("#qqq").html(); 
	var myList = [
	{
	item: 'Это увлекательно и интересно'
	},
	{
	item: 'Попасть в IT, стать разработчиком'
	},
	{
	item: 'Сменить работу'
	}
	];
	
	var block2 = tmpl(listHtml, { 
	data1: myList  
	});
	$('.content').append(block2);

	var footHtml = $("#footer").html(); 
	var myFoot = 
	[
	'+380953060156',
	'https://vk.com/chipurenok',
	'VK',
	'Хочу получить максимум знаний и навыков!'
	];
		
	var block3 = tmpl(footHtml, { 
	data2: myFoot  
	});

	$('.content').append(block3);
		
	});