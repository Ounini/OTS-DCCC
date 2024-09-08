const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

$(document).ready(function () {
	$(".toTop").hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$(".toTop").fadeIn();
		} else {
			$(".toTop").fadeOut();
		}
	});

	$(".toTop").click(function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			"fast"
		);
		return false;
	});
});

$(document).ready(function () {
	$(window).scroll(function () {
		$(".element").each(function () {
			let position = $(this).offset().top;
			let screenHeight = $(window).height();
			let scroll = $(window).scrollTop();

			if (position < scroll + screenHeight) {
				$(this).addClass("animate");
			} else {
				$(this).removeClass("animate");
			}
		});
	});
});
