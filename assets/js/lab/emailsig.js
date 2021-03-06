jQuery(function($) {

	var
		form = $('form.signature-generator'),
		container = $('#generated-signature'),
		signature = $('.signature'),
		clear = $('.js-start-over'),
		success = $('#success_msg');

	form.submit(function(e) {

		var
			firstName = $(this).find('#first_name').val(),
			lastName = $(this).find('#last_name').val(),
			jobTitle = $(this).find('#job_title').val(),
			cert = $(this).find('#cert').val(),
			officeExt = $(this).find('#office_ext').val(),
			mobile = $(this).find('#mobile').val(),
			twitter = $(this).find('#twitter').val(),
			email = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@adaptiva.com';

		e.preventDefault();

		$('#signature_name').html(firstName + ' ' + lastName);
		$('#signature_title').html(jobTitle);
		if (officeExt) {
			$('#signature_office').html(' <span class="gray">x</span>' + officeExt);
		}
		if (mobile) {
			$('#signature_mobile').html(mobile + '<br>');
		} else {
			$('span.mobile').hide();
		}
		if (cert) {
			$('div#signature_cert').show().html(cert + '<br>');
		} else {
			$('div#signature_cert').hide();
		}
		if (twitter) {
			$('div.signature-twitter')
			.show()
			.find('a')
			.attr({
				'href':'https://twitter.com/' + twitter,
				'title': 'Follow ' + firstName + ' on Twitter!',
				'target':'_blank'
			})
			.text('@' + twitter);
		} else {
			$('div.signature-twitter').hide();
		}
		$('#signature_email').html(email).attr('href', 'mailto:' + email);
		$('#generated-signature > span').hide();
		signature.addClass('is-active').fadeIn(300);
		$('#emailSig-clear').fadeIn();
		success.fadeIn();

	});

	clear.click(function(e) {

		e.preventDefault();
		form.get(0).reset();
		signature.removeClass('is-active').fadeOut(300, function() {

			$('#signature_name, #signature_title, #signature_office, #signature_mobile, #signature_email').empty();
			$('#generated-signature > span').fadeIn(300);

		});

		$('#emailSig-clear').fadeOut();
		success.fadeOut();
	});

});
