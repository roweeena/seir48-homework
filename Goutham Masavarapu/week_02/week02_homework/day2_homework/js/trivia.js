$( function() {
    $( "#draggable" ).draggable();
  } );


  $( function() {
      $( "#draggable1" ).draggable();
    } );


    $( function() {
        $( "#draggable2" ).draggable();
      } );

      $( function() {
          $( "#draggable3" ).draggable();
        } );


        $( function() {
            $( "#draggable4" ).draggable();
          } );


          $(document).ready(function(){

            // jQuery methods go here...

            $("#draggable").mouseenter(function(){
                       $("#draggable").animate({left: '200px'});
                  });

          });
