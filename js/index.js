$(function() {
	var $container = $(".container");


	function newGrid () {
		var userInput = prompt("Enter a grid size."),
			gridSize = Math.pow(userInput, 2),
			divSize = $container.width() / userInput;
		//$container.empty();
		var html = "";

		for (var i = 0; i < gridSize; i++) {
			//$container.append("<div style='height: " + divSize + "px; width: " + divSize + "px;'></div>")
			html += "<div style='height: " + divSize + "px; width: " + divSize + "px;'></div>";
		}

		$container.html(html);

		$(".container div").mouseenter(function() {
			$(this).css("background-color", "#000000");
		})
	}

	newGrid();

	$("button").click(function() {
		newGrid();
	})
});