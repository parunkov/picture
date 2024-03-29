(function() {
	let pictureBigOpen = false;
	let picture = document.querySelectorAll('.popup-open');


	for (let i = 0; i < picture.length; i++) {
		let style = 'background-image: url(' + picture[i].src + ');';
		let onPictureClick = function(evt) {
			evt.preventDefault();
			let pictureWrap = document.createElement('div');
			pictureWrap.setAttribute('style', 'position: relative;');
			let pictureBig = document.createElement('div');
			pictureBig.className = 'picture-big';
			picture[i].before(pictureWrap);
			pictureWrap.prepend(pictureBig);
			pictureBig.setAttribute('style', style);

			let popupClose = document.createElement('div');
			popupClose.className = 'popup-close';
			popupClose.innerHTML = 'Закрыть Х';
			pictureBig.prepend(popupClose);

			let bgDark = document.createElement('div');
			bgDark.className = 'bg-dark';
			document.body.append(bgDark);

			const closePopup = function() {
				pictureWrap.remove();
				bgDark.remove();
				picture[i].addEventListener('click', onPictureClick);
				document.removeEventListener('click', onClick);
				pictureBigOpen = false;
			}

			popupClose.addEventListener('click', function(evt) {
				evt.preventDefault();
				closePopup();
			});
			picture[i].removeEventListener('click', onPictureClick);
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
		picture[i].addEventListener('click', onPictureClick);
	}	
})();