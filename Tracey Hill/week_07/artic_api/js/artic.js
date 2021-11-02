const fetchArt = function(event){
    event.preventDefault(); // stay on this page
    const artist = $('#artist').val();

    // returns a deferred object: .done()
    $.ajax(`https://api.artic.edu/api/v1/artworks/search?q=${ artist }&limit=20&fields=id,title,image_id,date_display,medium_display`).done(function (response) {
        //const title = data.data[0].volumeInfo.imageLinks.thumbnail; 
        //const description = data.data[0].thumbnail.alt_text;
        $( "#work" ).empty();
        $( ".container").show();
        response.data.map((work) => {
            $('#work').append(
                `<div class="card">
                    <h2>${work.title}</h2>
            
                    <p>${work.date_display}, ${work.medium_display}</p>
            
                    <img src="https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg">
                </div>`
            );
        })        
    });
};

$('form').on('submit', fetchArt);
