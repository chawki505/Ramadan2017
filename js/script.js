$(function() {
$('img').hide();
$('#messageF').hide();
var voeux = ["Le mois de ramadan est :", "Le mois des bien faits... Le mois des adorations... Le mois des invocations...", "le mois du partage... Le mois du pardon... Le mois du repentir...", "Un mois beni qui rapporte beacoup pour ceux qui font des efforts"];
var $list = $('ul');




	$list.append('<li>' + voeux[0] + '</li>');
	$("li:last").slideUp(0).delay(1000).fadeIn(1000);

	$list.append('<li>' + voeux[1] + '</li>');
	$("li:last").slideUp(0).delay(3000).fadeIn(1000);

	$list.append('<li>' + voeux[2] + '</li>');
	$("li:last").slideUp(0).delay(7000).fadeIn(1000);

	$list.append('<li>' + voeux[3] + '</li>');
	$("li:last").slideUp(0).delay(9000).fadeIn(1000);




$('img').show();
$("img").slideUp(0).delay(12000).fadeIn(1500);
$('#messageF').show();
$('#messageF').slideUp(0).delay(12000).fadeIn(1500);



});
