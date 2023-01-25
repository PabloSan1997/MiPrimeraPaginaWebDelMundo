(function(){
//propiedades
var proslider = {
	slider: document.getElementById('slider'),
	primerslide: null
}
// metodos slider
var metslider = {
	inicio: function (){
		setInterval(metslider.moverslide,3000);
	},
	moverslide: function (){
		proslider.slider.style.transition = 'all 1s ease';
		proslider.slider.style.marginLeft = '-100%' 

		setTimeout(function(){
			proslider.primerslide = proslider.slider.firstElementChild;

			proslider.slider.appendChild(proslider.primerslide);
			proslider.slider.style.transition = 'unset';

			proslider.slider.style.marginLeft = 0;
		}, 1000);

	}

}
metslider.inicio();	
}());

