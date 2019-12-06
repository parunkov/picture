console.log('!!!');
(function() {
	let picture = document.querySelector('.wp-image-3795');
	let blockleft = document.querySelector('.blockleft');
	console.log(picture.src);
	picture.addEventListener('click', function(evt) {
		console.log(4);
		let pictureBig = document.createElement('div');
		pictureBig.className = 'picture-big';
		blockleft.prepend(pictureBig);
		
	});
})();