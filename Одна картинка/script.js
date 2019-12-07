(function() {
	let pictureBigOpen = false;
	let picture = document.querySelector('.wp-image-3795');

	let style = 'position: absolute; top: -100px; left:90px; width: 912px; height: 480px; background: url(' + picture.src + ') no-repeat; background-size: contain;';
	let popupCloseStyle = 'font-size: 30px; text-align: right; padding-top: 10px; padding-right: 20px; cursor: pointer;';

	let onPictureClick = function(evt) {
		evt.preventDefault();
		let pictureWrap = document.createElement('div');
		pictureWrap.setAttribute('style', 'position: relative;');
		let pictureBig = document.createElement('div');
		pictureBig.className = 'picture-big';
		picture.before(pictureWrap);
		pictureWrap.prepend(pictureBig);
		pictureBig.setAttribute('style', style);

		let popupClose = document.createElement('div');
		popupClose.className = 'popup-close';
		popupClose.innerHTML = 'Закрыть Х';
		pictureBig.prepend(popupClose);
		popupClose.setAttribute('style', popupCloseStyle);

		const closePopup = function() {
			pictureWrap.remove();
			picture.addEventListener('click', onPictureClick);
			document.removeEventListener('click', onClick);
			pictureBigOpen = false;
		}

		popupClose.addEventListener('click', function(evt) {
			evt.preventDefault();
			closePopup();
		});
		picture.removeEventListener('click', onPictureClick);
		setTimeout(() => pictureBigOpen = true, 300);
		
		let onClick = function(evt) {
			if (pictureBigOpen) {
				if (evt.target != pictureBig) {
					closePopup();
				}
			}
		}
		document.addEventListener('click', onClick);
	}
	picture.addEventListener('click', onPictureClick);	
})();