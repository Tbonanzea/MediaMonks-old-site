const main = () => {
	const next = document.getElementById('next');
	const back = document.getElementById('back');
	const backgroundImage = document.getElementById('backgroundImage');
	const nav = document.getElementById('nav');
	const transitionPercentages = [
		0,
		-10.225,
		-19,
		-30.6,
		-42.3,
		-54,
		-66.2,
		-81.8,
		-81.8,
		-95.5,
	];
	let navIndex = 0;
	let previousNavIndex = 0;

	setTimeout(() => {
		document.getElementById('loaderContainer').style.visibility = 'hidden';

		const arrowsVisibility = () => {
			if (navIndex === 0) {
				back.style.visibility = 'hidden';
			} else if (navIndex === 9) {
				next.style.visibility = 'hidden';
			} else {
				back.style.visibility = 'visible';
				next.style.visibility = 'visible';
			}
		};

		const checkNavSquare = () => {
			document.querySelectorAll('li.nav-item > a > p').forEach((i) => {
				i.className = '';
			});

			document.getElementById('nav'.concat(navIndex)).className =
				'clicked-nav';
		};

		const showSection = (percentage) => {
			arrowsVisibility();
			backgroundImage.style.transform = 'translateX('.concat(
				percentage,
				'%)'
			);

			//HIDE PREVIOUS SECTION
			document.getElementById(
				'section'.concat(previousNavIndex)
			).style.visibility = 'hidden';

			document.getElementById(
				'section'.concat(previousNavIndex)
			).style.opacity = 0;

			//SHOW CURRENT SECTION
			document.getElementById(
				'section'.concat(navIndex)
			).style.visibility = 'visible';

			document.getElementById(
				'section'.concat(navIndex)
			).style.opacity = 1;

			previousNavIndex = navIndex;
			checkNavSquare();
		};

		next.addEventListener('click', () => {
			navIndex++;
			showSection(transitionPercentages[navIndex]);
		});

		back.addEventListener('click', () => {
			navIndex--;
			showSection(transitionPercentages[navIndex]);
		});

		nav.addEventListener('click', (e) => {
			navIndex = e.target.id[e.target.id.length - 1];
			showSection(transitionPercentages[navIndex]);
		});

		arrowsVisibility();
		showSection(transitionPercentages[0]);
	}, 3000);
};

window.onload = () => {
	main();
};
