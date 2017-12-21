$(document).ready(function() {

	$('.business_card').hide();

	$('form').submit(function() {
			
			var formInfo = $(this).serializeArray();
			console.log(formInfo);

			var html = '<div class="business_card">'

			formInfo.map(function(arr) {
				if (arr.name == 'first_name') {
					html += '<h1>' + arr.value
				} else if (arr.name == 'last_name') {
					html += ' '  + arr.value + '</h1>'
				} else if (arr.name == 'description') {
					html += '<div class="descrip"><p>'+arr.value+'</p></div>'
				}
			})

			html += '</div>'
			
			var $html = $(html);
			$html.find('.descrip').hide();

			$('#card_info').append($html);
			$('.business_card').click(function() {
			$('.descrip').fadeIn();

			})

			

			return false
	})
})