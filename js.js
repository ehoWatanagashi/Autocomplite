$(function() {
	
	var flowers = ["message", "attaches", "messattaches", "artmes", "fefrattames",
			      "Подснежник", "Мак", "Первоцвет", "Петуния", "Фиалка"];
   
    $('#acInput').autocomplete({
                source: function(request, response) {
                    var term = request.term;
                    var pattern = new RegExp("^" + term, "i");
                    
                    var results = $.map(flowers, function(elem) {                       
                        if (pattern.test(elem)) {
                            return elem;
                        }
                    })                    
                    response(results);
				}
    })
	$('#acInput').autocomplete({
				minLength: 1,
				delay: 0,
				autoFocus:true	
    })
});