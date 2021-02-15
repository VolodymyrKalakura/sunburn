document.addEventListener('DOMContentLoaded', () => {

	const mobileScreenWidth = 700;
	const visibleGroupItemValue = 8;
	const screenWidht  = screen.width;
	const isMobile  = mobileScreenWidth > screenWidht;
	let hiddenValue = 0;
	const hide = () => {
		const list = document.querySelectorAll('.group__item');
		list.forEach((item, index) => {
			if ( index >= visibleGroupItemValue ) {
				item.classList.add('hidden');
				hiddenValue++;
			}
		});
	};

	const replaceText = () => {
		const newMainText = 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более ячсячсячся';
		const newGroupTitle = `Lorem ipsum: (${hiddenValue})`;
		const newHeaderName = 'Lorem ipsum Lorem ';
		document.querySelector('.main__text').textContent = newMainText;
		document.querySelector('.group__title').textContent = newGroupTitle;
		document.querySelector('.header__name').textContent = newHeaderName;
	};

	if ( isMobile ) {
		hide();
		replaceText();
	};
})
