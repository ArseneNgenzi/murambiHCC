$(document).ready(function () {


	// GET BACK TO TOP BY CLICKING
	function backToTop() {
		$('#back-to-top').on('click', function () {
			$('#back-to-top').tooltip('hide')
			$('body,html').animate(
				{
					scrollTop: 0,
				},
				100
			)
			return false
		})
	}
	backToTop()

	$(window).on("scroll", function () {
		let link = $(".navbar a.dot");
		let top = $(window).scrollTop();

		$(".sec").each(function () {
			let id = $(this).attr("id");
			let height = $(this).height();
			let offset = $(this).offset().top - 300;
			if (top >= offset && top < offset + height) {
				link.removeClass("active");
				$(".navbar")
					.find('[data-scroll="' + id + '"]')
					.addClass("active");
			}
		});




		// scroll to top btn show/hide
		function scrollTopBtn() {
			var scrollToTop = $('#back-to-top'),
				scroll = $(window).scrollTop()
			if (scroll >= 1000) {
				scrollToTop.fadeIn()
			} else {
				scrollToTop.fadeOut()
			}
		}
		scrollTopBtn()

	});
});


// $(window).on('scroll', function () {


// })



//  SCROLL TRACKER
// const scrollViewer= document.querySelector(".scroll-viewer");
const scrollViewerFill = document.querySelector(".scroll-viewer-fill");
const headNav = document.querySelector('.head-nav')

window.addEventListener("scroll", () => {
	const scrollable = document.documentElement.scrollHeight - window.innerHeight;
	const scrolled = window.scrollY;

	let percentageScrolled = 0;



	if (scrollable > 0) {
		percentageScrolled = Math.ceil((scrolled / scrollable) * 100);
	}

	scrollViewerFill.style.width = `${percentageScrolled}%`;

	if (scrolled > 55) {
		headNav.classList.add('getFixed')
	} else {
		headNav.classList.remove('getFixed')
	}
});

//  ABOUT US TABS
let tabs = document.querySelectorAll(".tabs__toggle"),
	contents = document.querySelectorAll(".tabs__content");

tabs.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		contents.forEach((content) => {
			content.classList.remove("is-active");
		});
		tabs.forEach((tab) => {
			tab.classList.remove("is-active");
		});
		contents[index].classList.add("is-active");
		tabs[index].classList.add("is-active");
	});
});



// HANDLE FORMMMMM
// CONTACT FORM


let sendBtn = document.querySelector('#sendBtn')

const sendMail = (e) => {
	e.preventDefault()
	const names = document.getElementById('name').value,
		email = document.getElementById('email').value,
		// subject = document.getElementById('subject').value,
		message = document.getElementById('message').value,
		reply_to = document.getElementById('email').value

	if (names && email && message) {
		let templateParams = {
			from_name: names,
			from_email: email,
			// from_subject: subject,
			message: message,
			reply_to: reply_to,
		}

		emailjs
			.send(
				'service_dqk2hd9',
				// 'template_nakp135',
				'template_h8zl0pr',
				templateParams,
				'hPWnzAmKyuf0rpatB'
			)
			.then((res) => {
				// console.log('sending succeeded', res.status)
				document.getElementById('name').value = ''
				document.getElementById('email').value = ''
				// document.getElementById('subject').value = ''
				document.getElementById('message').value = ''
				if (res.status == 200) {
					document.querySelector('.submit-feedback').innerHTML =
						'Message Submitted Successfully!'
					document.querySelector('.submit-feedback').classList.add('success')
				} else {
					document.querySelector('.submit-feedback').innerHTML =
						'Ooops! Something Wrong Happened!'
					document.querySelector('.submit-feedback').classList.add('error')
				}
			})
	} else {
		document.querySelector('.submit-feedback').innerHTML = "Please fill all fields!"
		document.querySelector('.submit-feedback').classList.add('error')
		// return false
	}
}

// sendBtn.addEventListener('click', sendMail)

// SHOW AND HIDE MENU

const burgerBtn = document.querySelector('.burger')
const HideMenu = document.querySelector('#hide-menu')
const links = document.querySelector('.links')


if (burgerBtn) {
	burgerBtn.addEventListener('click', () => {
		links.classList.add('show-menu')
	})
}

if (HideMenu) {
	HideMenu.addEventListener('click', () => {
		links.classList.remove('show-menu')
	})
}



// CLOSE MENU WHEN NAVIGATOR LINKS ARE CLICKED 

const clickCloseMenu = document.querySelectorAll('.click-close-menu')

clickCloseMenu.forEach(item => {
	item.addEventListener('click', () => {
		links.classList.remove('show-menu')
	})
})
