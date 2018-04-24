var en = false;

$( document ).ready(function() {

	checkCookie()
	changeLanguage()
	
});

$(window).on('load', function(){
    $(window).on("scroll resize", function () {
        var pos = $('#date').offset();
        $('.first-work').each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                $('#date').html($(this).find('.description').text()); //or any other way you want to get the date
                return; //break the loop
            }
        });
    });

    $(document).ready(function () {
        $(window).trigger('scroll'); // init the value
    });

})

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var language = getCookie("language");
    if (language == "en") {
        en = true
    }else if(language == "es"){
    	en = false
    } else {
    	setCookie("language", "es", 365);
    }
}

function changeLanguage(){	

	if (en) {
		//language is english
		setCookie('language','en',365);


		$('li.change_language button').html("ES");

		$('.countries p').html('Costa Rica, Spain, Germany, France, Ireland, Sweden, Japan, China.')

		$('.we-are').html('We are a design studio specialized in brand and image development for high-end businesses.')

		$('.about-us').html('ABOUT US.')

		$('.about-us-p').html('We are a multidisciplinary team of creative young people passionate about ideas. We develop image projects integrating graphic design, industrial design, communication, marketing and digital platforms.')

		$('.about-us-p2').html('We work under the principles of good design: functionality, aesthetics, innovation, honesty, clarity and synthesis. We are not afraid to experiment with new concepts or to enter unexplored territories. If there are better ways of doing things, we will find them and share them with you.')

		$('.process').html('PROCESS.')

		$('.process-elegant').html('Identification - Inspiration - Design - Evaluation.')

		$('.process-p').html('We firmly believe that we only have one opportunity to make a good impression, that is why we investigate the market to get to know the audience, we study what happens in the world to be at the forefront, we work meticulously on the details and we test our proposals before launching.')

		$('.eclectisism').html('ECLECTICISM.')

		$('.eclectisism-p').html('The dynamic of the studio is characterized by dismissing the boundaries between areas of knowledge. We encourage our collaborators to explore and experiment outside their professional area to obtain inspiration from multiple and diverse sources, allowing us to develop thorough and innovative proposals.')

		$('.services').html('SERVICES.')

		$('.services-elegant2').html('Graphic design')

		$('.services-elegant21').html('<p>Visual identity and logo.</p><p>Brand applications.</p><p>Packaging design</p><p>Digital and printed material.</p>')

		$('.services-elegant31').html('<p>Design of books and magazines.</p><p>Posters and brochures.</p>')

		$('.services-elegant4').html('Web design')

		$('.services-elegant41').html('<p>Interface design.</p><p>User experience.</p><p>Usability analysis.</p>')

		$('.services-elegant51').html('<p>Strategy and positioning.</p><p>Design and content creation.</p><p>Community management.</p>')

		$('.services-elegant6').html('Interior design')

		$('.services-elegant61').html('<p>Retail design.</p>')

		$('.presence').html('PRESENCE.')

		$('.presence-p').html('Our collaborators in other parts of the world contribute their experience and vision to each of our projects, generating competitive results on a global scale.')

	}else{
		//language is spanish

		setCookie('language','es',365);

		$('li.change_language button').html("EN");

		$('.countries p').html('Costa Rica, España, Alemania, Francia, Irlanda, Suecia, Japón, China.')

		$('.we-are').html('Somos un studio de diseño especializado en el desarrollo de imagen para negocios de alta gama.')

		$('.about-us').html('NOSOTROS.')

		$('.about-us-p').html('Somos un equipo multidisciplinar de jovenes creativos apasionados por las ideas. Desarrollamos proyectos de imagen integrando diseño gráfico, diseño industrial, comunicación, marketing y plataformas digitales.')


		$('.about-us-p2').html('Trabajamos bajo los principios del buen diseño: funcionalidad, estética, innovación, honestidad, claridad y síntesis. No tememos a experimentar con nuevos conceptos ni a adentrarnos en territorios inexplorados. Si hay mejores formas de hacer las cosas, las encontraremos y las compartiremos contigo.')

		$('.process').html('PROCESO.')

		$('.process-elegant').html('Identificación - Inspiración - Diseño - Evaluación.')

		$('.process-p').html('Creemos firmemente que sólo tenemos una oportunidad para dar una buena impresión, por eso investigamos el mercado para conocer a la audiencia, estudiamos lo que sucede en el mundo para estar a la vanguardia, trabajamos minuciosamente en los detalles y probamos nuestras propuestas antes del lanzamiento.')

		$('.eclectisism').html('ECLECTICISMO.')

		$('.eclectisism-p').html('La dinámica del studio se caracteriza por desestimar los límites entre áreas de conocimiento. Alentamos a nuestros colaboradores a explorar y experimentar fuera de su área profesional para obtener inspiración de múltiples y diversas fuentes, permitiéndonos desarrollar propuestas integrales.')

		$('.services').html('SERVICIOS.')

		$('.services-elegant2').html('Diseño gráfico')

		$('.services-elegant21').html('<p>Identidad visual y logotipo.</p><p>Aplicaciones de marca.</p><p>Diseño de empaque.</p><p>Material digital e impreso.</p>')

		$('.services-elegant31').html('<p>Diseño de libros y revistas.</p><p>Diseño de libros y revistas.</p>')

		$('.services-elegant4').html('Diseño web')

		$('.services-elegant41').html('<p>Diseño de interface.</p><p>Experiencia de usuario.</p><p>Análisis de usabilidad.</p>')

		$('.services-elegant51').html('<p>Estrategia y posicionamiento.</p><p>Diseño y creación de contenido.</p><p>Community management.</p>')

		$('.services-elegant6').html('Interiorismo')

		$('.services-elegant61').html('<p>Decoración de comercios.</p>')

		$('.presence').html('PRESENCIA.')

		$('.presence-p').html('Nuestros colaboradores en otras partes del mundo aportan su experiencia y visión a cada uno de nuestros proyectos, generando resultados competitivos a escala global.')

	};

	en = !en;
}