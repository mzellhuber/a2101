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

		$('.collaborators').html('Collaborators')

		$('.nehu-c').html('Nehu is a local brand of handmade typical Mexican sweets and healthy snacks.')

		$('.nehu-p').html('Nehu emerges as a social development project aimed at boosting women in vulnerable conditions.<br><br>Once the project was successfully sustained, the search began for an image that would reflect the exceptional quality of the products and allow the project to increase its position, scope and sales. Through colors and materials, Nehu maintains its essence and Mexican roots; however, it is through its simplified image that it manages to integrate into the current globalized Mexico. Of great luminosity, discretion and simplicity, the brand manages to attract attention and position itself among its high-end competitors. The use of colors allows the consumer to easily identify the 3 main product lines: sweet, salty and chocolate.')

		$('.nicte-c').html('Nictë is a brand of natural handmade cosmetics specializing in products for spas and boutiques.')

		$('.nicte-p').html('Nictë is characterized by quality craftsmanship and its select ingredients. Despite its Mayan name, the goal was to develop an image that would reflect the values, cultural and aesthetic, of contemporary Mexico.<br><br>The proposed image is honest and direct: it presents only the necessary information clearly. Like the products, the image seeks to be minimally invasive: avoid saturation and accentuate the delicacy and balance of the mixes to generate peace and well-being.')

		$('.wens-c').html('Wenceslao Olvera is a leading stylist and founder of a beauty salon specializing in image for public events: presentations, parades and galas.')

		$('.wens-p').html('Glamour and attitude are concepts that define the work of Wens Olvera. Taking inspiration from its founder, the brand reflects a strong masculine presence well integrated to a stylized, elegant and delicate environment. This balance between features: male and female, bright and matt, natural and synthetic ... achieves a neutrality that inspires comfort and belonging in men and women.<br><br>The diversity of shades provided by the metal with the movement of light reflects the adaptability and constant change that keep Wenceslao and his team at the forefront. The use of white, black and gray brings reliability, luminosity and cleanliness, promising its customers results that fully meet the expectations of luxury and attraction.')

		$('.a2-c').html('A2;//101 is a design studio specialized in brand and image development for high-end businesses.')

		$('.a2-p').html('Through a minimal style and asymmetrical structure, the brand projects the elegance, honesty and neatness it offers its clients. The use of alphanumeric characters in the name and logo reflects the search for universality: good design must be functional, beautiful, honest and understandable regardless of the origin of the person looking at it.<br><br>The use of asymmetry reflects the order and beauty that can be found in chaos, expressing the philosophy of the study to look for alternative sources of inspiration to find solutions in the most unexpected places.')

		$('.chromikae-c').html('Chromikae is an image consultancy dedicated to style advice, image design and fashion and trends’ research.')

		$('.chromikae-p').html('As part of the fashion industry, Chromikae leans towards a neutral, global and stylized image and name, allowing its adaptation to different markets, moods and trends.<br><br>The gray tones and natural textures project sobriety and elegance while the golden adds luminosity and presence. Of minimal style, the brand acquires cleanliness, balance and an editorial quality that allows it to position itself as a serious, reliable and highly experienced consultancy.')

		$('.nostro-c').html('Il Nostro is a fusion restaurant that combines Italian and French gourmet cuisine.')

		$('.nostro-p').html('Il Nostro Bistro seeks to offer a complete gastronomic experience to its guests, attending with great detail to the eyes and palate.<br><br>Taking the contrasts as a basis, a two-color image was developed with a style that combines the minimal and gourmet with the classic and organic. Illustrations were used to project the nature, freshness and vitality of its ingredients and dishes, while the logo remains structured and sophisticated. Likewise, the logo is discreet and the information is presented in a precise and clean way to focus attention on the food and the culinary experience.')

		$('.broom-c').html('Broom&Birch is a project dedicated to the creation and commercialization of handmade products capable of generating a holistic well-being.')

		$('.broom-p').html('For its round approach, Broom&Birch designs and commercializes utilitarian art, food, cosmetics and textiles mainly; all of great material and aesthetic quality.<br><br>The brand was looking for an image that would allow it to position itself internationally; that would give it class and elegance yet projecting the manual, local and meticulous work that its products exhibit. In the same way, it should be an image capable of uniting its different branches of products and attracting a select, connoisseur and tasteful public.')
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

		$('.collaborators').html('Colaboradores')

		$('.nehu-c').html('Nehu es una marca local de dulces típicos mexicanos y snacks saludables hechos a mano.')

		$('.nehu-p').html('Nehu surge como un proyecto de desarrollo social destinado a impulsar a mujeres en condiciones vulnerables.<br><br>Una vez que el proyecto se sostuvo con éxito, se inició la búsqueda de una imagen que reflejara la calidad excepcional de los productos y que permitiera al proyecto elevar su posición, alcance y ventas. A través de los colores y los materiales, Nehu mantiene su esencia y raíces mexicanas; sin embargo, es a través de su imagen  simplificada que logra integrarse al México globalizado actual. De gran luminosidad, discreción y sencillez, la marca logra llamar la atención y posicionarse entre sus competidores de alta gama. El uso de colores permite al consumidor identificar facilmente las 3 principales líneas de productos: dulces, salados y chocolate.')

		$('.nicte-c').html('Nictë es una marca de cosméticos artesanales naturales especializada en productos para spas y boutiques.')

		$('.nicte-p').html('Nictë se caracteriza por calidad artesanal y sus ingredientes selectos. A pesar de su nombre maya, el objetivo fue desarrollar una imágen que plasmara los valores, culturales y estéticos, del México contemporáneo.<br><br>La imagen propuesta es honesta y directa: presenta sólo la información necesaria de forma clara. Al igual que los productos, la imagen busca ser poco invasiva: evitar la saturación y acentuar la delicadeza y el balance de las mezclas para generar paz y bienestar.')

		$('.wens-c').html('Wenceslao Olvera es un destacado estilista y fundador de un salón de belleza especializado en imagen para eventos públicos: presentaciones, desfiles y galas.')

		$('.wens-p').html('Glamour y actitud son conceptos que definen el trabajo de Wens Olvera. Tomando como inspiración el porte de su fundador, la marca refleja una fuerte presencia masculina bien integrada a un ambiente estilizado, elegante y delicado. Este balance entre rasgos: masculino y femenino, brillante y mate, natural y sintético... logra una neutralidad que inspira comodidad y pertenencia en hombres y mujeres. <br><br>La diversidad de tonos que provee el metal con el movimiento de la luz plasma la adaptabilidad y el constante cambio que mantienen a Wenceslao y su equipo a la vanguardia. El uso de blanco, negro y gris aporta confiabilidad, luminosidad y limpieza, prometiendo a sus usuarios resultados que cumplen completamente con las expectativas de lujo y atracción.')

		$('.a2-c').html('A2;//101 es un studio de diseño especializado en el desarrollo de imagen para negocios de alta gama.')

		$('.a2-p').html('A través de un estilo minimal y estructura asimétrica, la marca proyecta la elegancia, honestidad y pulcritud que ofrece a sus clientes. El uso de caracteres alfanuméricos en el nombre y el logotipo refleja la búsqueda de universalidad: el buen diseño debe ser funcional, bello, honesto y entendible sin importar la procedencia de quien lo mira.<br><br>El uso de asimetría plasma el orden y la belleza que se puede encontrar el en caos, expresando la filosofía del estudio de buscar fuentes de inspiración alternativas para encontrar soluciones en los sitios más inesperados.')

		$('.chromikae-c').html('Chromikae es una consultoría de imagen dedicada a la asesoría de estilo, diseño de imagen e investigación de moda y tendencias.')

		$('.chromikae-p').html('Como parte la industria de la moda, Chromikae se inclina por un nombre y una imagen neutral, global y estilizada  que permita su adaptación a diferentes mercados, moods y tendencias.<br><br>Los tonos grises y texturas naturales proyectan sobriedad y elegancia mientras que el dorado aporta luminosidad y presencia. De estilo minimal, la marca adquiere limpieza, equilibrio y una calidad editorial que le permite posicionarse como una consultoría seria, confiable y de gran experiencia.')

		$('.nostro-c').html('Il Nostro es un restaurante fusión que combina gastronomía gourmet italiana y francesa.')

		$('.nostro-p').html('Il Nostro Bistro busca ofrecer una experiencia gastronómica completa a sus comensales, atendiendo con gran detalle a la vista y al paladar. <br><br>Tomando los contrastes como base, se desarrolló una imagen a dos colores con un estilo que combina lo minimal y gourmet con lo clásico y orgánico. Se emplearon ilustraciones para proyectar la naturaleza, frescura y vitalidad de sus ingredientes y sus platillos, mientras que el logotipo se mantiene estructurado y sofisticado. Asímismo, el logotipo se muestra discreto y la información se presenta de forma precisa y limpia para focalizar la atención en los alimentos y la experiencia culinaria.')

		$('.broom-c').html('Broom&Birch es un proyecto dedicado a la creación y comercialización de productos artesanales capaces de generar un bienestar holístico.')

		$('.broom-p').html('Por su acercamiento integral, Broom&Birch diseña y comercializa arte utilitario, alimentos, cosméticos y textiles principalmente; todos de gran calidad material y estética. <br><br>La marca buscaba una imagen que le permitiera posicionarse a nivel internacional; que le aportara clase y elegancia pero que proyectara el trabajo manual, local y minucioso que contienen sus productos. Asímismo, debería ser una imagen capaz de unificar sus diferentes ramas de productos y que atrajera a un público selecto conocedor y de buen gusto.')

	};

	en = !en;
}