
// When size is submitted by the user, call makeGrid()
$(document).ready(function(){
		$('#submit').click(function(event){
	    $('#pixelCanvas tr').remove(); 
		var rows=$('#inputHeight').val();                 // Grid height is equal to number of rows.
		var cells=$('#inputWeight').val();                 // Grid width is equal to number of columns.
		console.log(rows);
		console.log(cells);
var i=1;
  	while(rows>=i){
    $('#pixelCanvas').append("<tr></tr>");
    for (var j=1;j<=cells;j++) {
      $( 'tr:last').append("<td></td>");         //IMPORTANT ! tr: last makes sure that the cells are added only to the last created table row and not for all.
      $('td').attr('class','pixel');
    }
    i=i+1;
  }
  event.preventDefault();
		});

		$('#pixelCanvas').on('click','.pixel',function(){  //event delegation - checks for any changes in table with id pixel_canvas and makes changes to element with class .pixel
  var pen=$('#colorPicker').val();
  $(this).css('background-color',pen);
  //var h1 =$('body').find('h1').css('background-color',pen);
  var h1 =$('body').find('h1').addClass('shake_effect');
});

// Toggle the grid after creating the pixel art
$('#toggleBtn').mousehover('#pixelCanvas',function (){
    $('td').toggleClass('grid_Toggle');
});



});
