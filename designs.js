
// When size is submitted by the user, call makeGrid()
$(document).ready(function(){
    $('#submit').click(function(event){
      $('#pixelCanvas tr').remove(); 
    var rows=$('#inputHeight').val();                 // Grid height is equal to number of rows.
    var cells=$('#inputWeight').val();                 // Grid width is equal to number of columns.
    
var i=1;
    while(rows>=i){
    $('#pixelCanvas').append("<tr></tr>");
    for (var j=1;j<=cells;j++) {
      $( 'tr:last').append("<td></td>");         
      $('td').attr('class','pixel');
    }
    i=i+1;
  }
  event.preventDefault();
    });

$('#pixelCanvas').on('mouseover','.pixel',function(){  
  var pen=$('#colorPicker').val();
  $(this).css('background-color',pen);
  //var h1 =$('body').find('h1').css('background-color',pen);
});


});

