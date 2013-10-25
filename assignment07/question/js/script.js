$(document).ready(function() {

	$('#button').click(function() {
		var prodId = $('#id').val();
		$.post(
			'product.php', 
			{id:prodId}, 
			function(result){
				$('#results').html(result);
			}
		);
	});

});