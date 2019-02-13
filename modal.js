var img = document.getElementsByClassName("img-fluid");

// for (var index = 0; index < img.length; index++) {
//     const element = img[index].onclick =  function() { 
//         document.getElementById("bigDisplay").src = this.src;
//     };
// }


$("#myModal").on('show.bs.modal', function (e) {
    var david = $(e.relatedTarget);    
    document.getElementById("bigDisplay").src = david[0].src;
  });



// for (var index = 0; index < img.length; index++) {
//     const element = img[index].onclick =  function(event) { 
//         document.getElementById("bigDisplay").src = event.target.src;
//         console.log(event);
        
//     };
// }