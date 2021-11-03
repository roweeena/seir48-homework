
const fetchAvatar = function() {
  event.preventDefault();


  const search = $('#search').val();
  const url = `https://api.multiavatar.com/${search}.png`;



$.ajax(url).done(function(data){

         $('#result').attr('src',url);

       });

   };

$('#fetch').on('click', fetchAvatar);
