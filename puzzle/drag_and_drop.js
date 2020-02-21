$(function(){
   $('img').draggable({
      cursor: "crosshair",
      containment: ".Game",
      scroll: false,
      revert: "invalid",
      opacity: 0.75,
      create: function(event, ui) {
         $(this).css({width:100, height:50})
      },
      start: function(event, ui) {
         ui.helper.css({left:0, top:0, width:120, height:73})
      }
   })

   $('.hole').droppable({
      tolerance: "pointer",
      accept: 'img',
      hoverClass: 'hovering',
      drop: function(event, ui) {
         if ($(ui.draggable).attr('id') == $(this).attr('id')) {
            $( this ).append( ui.draggable.css({left:0, top:0, width:120, height:73}) );
            if($('.chips img').length == 0){
               $('.chips').html('<h2>Felicidades, terminaste<h2>')
            }
         }else{
            $( ui.draggable ).draggable( "option", "revert", true );
         }
      }
   })
})
