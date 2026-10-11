(function(){
  var els=document.querySelectorAll("[data-reveal]");
  if(!("IntersectionObserver" in window)||window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    els.forEach(function(e){e.classList.add("in")});return;
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target);} });
  },{threshold:.12});
  els.forEach(function(e){io.observe(e)});
})();
