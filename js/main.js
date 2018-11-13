//select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item')
const slide0 = document.querySelectorAll('#welcome-section')


// set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu(){
	if (!showMenu){
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItem.forEach(item=> item.classList.add('show'));

		//Set Menu state
		showMenu = true;
	}
	else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItem.forEach(item=> item.classList.remove('show'));

		showMenu = false;
	}
}

$(document).ready(function(){
	$(".nav-item0").click(function(){
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItem.forEach(item=> item.classList.remove('show'));
		menuBtn.classList.remove('remove');

		$(".nav-item").removeClass('current');
		$(".nav-item0").addClass('current');
		$('.main-menu').removeClass('show')
		$('.main-menu').addClass('close')
		$("#welcome-section").addClass('show');
		

		showMenu = false;
	});
	$(".nav-item1").click(function(){
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItem.forEach(item=> item.classList.remove('show'));
		menuBtn.classList.remove('remove');

		$(".nav-item").removeClass('current');
		$(".nav-item1").addClass('current');
		$('.main-menu').removeClass('show')
		$('.main-menu').addClass('close')
		$("#about").addClass('show');

		showMenu = false;
	});

	$(".nav-item2").click(function(){
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItem.forEach(item=> item.classList.remove('show'));
		menuBtn.classList.remove('remove');

		$(".nav-item").removeClass('current');
		$(".nav-item2").addClass('current');
		$('.main-menu').removeClass('show')
		$('.main-menu').addClass('close')
		$("#projects").addClass('show');

		showMenu = false;
	});
	$(".nav-item3").click(function(){
		menuBtn.classList.add('remove');
		menuBranding.classList.remove('show');
		$(".nav-item").removeClass('current');
		$(".nav-item3").addClass('current');
		$('.main-menu').removeClass('show')
		$('.main-menu').addClass('close')
		$("#contact").addClass('show');
		showMenu = true;
	});

});