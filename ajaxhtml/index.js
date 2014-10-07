$(document).ready(function() {
	$('.tabs a').click(function(event) {
		switch_tab($(this));

	});
	switch_tab($('.default'));
});
function switch_tab(obj){
	$('.tab-content').hide();
	$('.tabs a').removeClass('selected');
	var id = obj.attr("rel");
	var file = id + '.html';
	$('.tab-content').load(file);
	$('#'+id).show();
	obj.addClass('selected');
}