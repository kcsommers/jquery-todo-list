var addToList = function(e) {
	e.preventDefault();
	let dataArray = [];
	var formData = $('form').serializeArray();
	if(formData[0].value) {
		var completeBtn = $('<span class="completeBtn">completed</span>')
		var deleteBtn = $('<span class="deleteBtn">remove</span>')
		$('.warning').text('');
		$('.list-container p').css('display', 'none');
		let priorityLevel = formData[1].value;
		let listItem = $('<li>' + formData[0].value + '</li>');
		if(priorityLevel === 'high') {
			listItem.addClass('high');
		} else if(priorityLevel === 'medium') {
			listItem.addClass('medium');
		} else {
			listItem.addClass('low');
		}

		listItem.append(deleteBtn, completeBtn);
		$('ol').append(listItem);
		$(e.target)[0].reset();

	} 
	else {
		$('.warning').text('Please add a task!');
	}
};

$(document).ready(function() {
	$('form').submit(addToList);
	$('ol').on('click', '.completeBtn', function() {
		$(this).parent().addClass('complete');
	});
	$('ol').on('click', '.deleteBtn', function() {
		$(this).parent().remove();
		if(!$('ol').children().length) {
			$('.list-container p').fadeIn(1000);
		}
	});
});