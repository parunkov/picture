(function() {
	let picture = document.querySelector('.wp-image-3795');
	let blockleft = document.querySelector('.blockleft');
	let style = 'position: absolute; top: -100px; left:90px; width: 912px; height: 480px; background: url(' + picture.src + ') no-repeat; background-size: contain;';
	picture.addEventListener('click', function(evt) {
		evt.preventDefault();
		let pictureBig = document.createElement('div');
		pictureBig.className = 'picture-big';
		blockleft.prepend(pictureBig);
		blockleft.setAttribute('style', 'position: relative;');
		pictureBig.setAttribute('style', style);
		let popupClose = document.createElement('div');
		popupClose.className = 'popup-close';
		popupClose.innerHTML = 'Закрыть Х';
		
		
	});
})();