document.querySelector(".first").addEventListener('click', function(){
    swal("Our First Alert");
  });
   
  document.querySelector(".second").addEventListener('click', function(){
    swal("Our First Alert", "With some body text!");
  });
   
  document.querySelector(".third").addEventListener('click', function(){
    swal("Our First Alert", "With some body text and success icon!", "success");
  });