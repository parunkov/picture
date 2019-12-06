(function() {
	let pictureBigOpen = false;
	let picture = document.querySelector('.wp-image-3795');
	let blockleft = document.querySelector('.blockleft');
	let style = 'position: absolute; top: -100px; left:90px; width: 912px; height: 480px; background: url(' + picture.src + ') no-repeat; background-size: contain;';
	let popupCloseStyle = 'font-size: 30px; text-align: right; padding-top: 10px; padding-right: 20px; cursor: pointer;';
	// picture.addEventListener('click', function(evt) {
	let onPictureClick = function(evt) {
		evt.preventDefault();
		// console.log('!!!');
		pictureBig = document.createElement('div');
		pictureBig.className = 'picture-big';
		blockleft.prepend(pictureBig);
		// pictureBigOpen = true;
		blockleft.setAttribute('style', 'position: relative;');
		pictureBig.setAttribute('style', style);

		let popupClose = document.createElement('div');
		popupClose.className = 'popup-close';
		popupClose.innerHTML = 'Закрыть Х';
		pictureBig.prepend(popupClose);
		popupClose.setAttribute('style', popupCloseStyle);


		popupClose.addEventListener('click', function(evt) {
			evt.preventDefault();
			pictureBig.remove();
			picture.addEventListener('click', onPictureClick);
			// document.removeEventListener('click', onClick);
			pictureBigOpen = false;
		});
		picture.removeEventListener('click', onPictureClick);
		pictureBigOpen = true;
		
	 	document.addEventListener('click', function(evt) {
		// console.log(pictureBigOpen);
		console.log(evt.target != pictureBig);
		console.log('open ' + pictureBigOpen);
	// 	if (pictureBigOpen) {
	// 		if (evt.target != pictureBig) {
	// 			// pictureBig.remove();
	// 			picture.addEventListener('click', onPictureClick);
	// 			// document.removeEventListener('click', onClick);
	// 			pictureBigOpen = false;
	// 		}
	// 	}
	});

	
	}
	picture.addEventListener('click', onPictureClick);
	// document.addEventListener('click', function(evt) {
	// 	// console.log(pictureBigOpen);
	// 	console.log(evt.target != pictureBig);
	// 	console.log(pictureBigOpen);
	// 	if (pictureBigOpen) {
	// 		if (evt.target != pictureBig) {
	// 			// pictureBig.remove();
	// 			picture.addEventListener('click', onPictureClick);
	// 			// document.removeEventListener('click', onClick);
	// 			pictureBigOpen = false;
	// 		}
	// 	}
	// });
	
})();