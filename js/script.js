$(function() {
	$('img').hide();
	$('#messageF').hide();
	var voeux = ["Le mois de ramadan est :", "Le mois des bien fait... Le mois des adoration... Le mois des invocation..." ,"le mois du partage... Le mois du pardon... Le mois du repentir...","Un mois beni qui rapporte beacoup pour ceux qui font des effort" ];
	var i = 1;
	var $list = $('ul');


	$list.append('<li>' + voeux[0] + '</li>');
	$("li:last").slideUp( 0 ).delay( 400 ).fadeIn( 500 );



	$list.on('click', function() {
		if (i < voeux.length) {
			$list.append('<li>' +voeux[i] + '</li>');
			$("li:last").slideUp( 0 ).delay( 400 ).fadeIn( 500 );
			i++;

			if (i >= voeux.length) {

				$('img').show();
				$("img").slideUp( 0 ).delay( 1000 ).fadeIn( 1500 );
				$('#messageF').show();
				$('#messageF').slideUp( 0 ).delay( 1000 ).fadeIn( 1500 );



			}
		}



	});

});
