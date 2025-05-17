// let content = bloc.querySelector('.accordion__answer');
// let wrapper = bloc.querySelector('.accordion__answer-bloc');
// wrapper.style.height = content.clientHeight + 'px';

// const titres = document.querySelectorAll(".accordion__title");
// console.log(titres);

// titres.forEach(element =>{
//     element.addEventListener("click", function(){
//         const bloc = element.parentElement;
//         bloc.classList.toggle('active');
//   });
// });

function initAccordion () {
  const blocs = document.querySelectorAll (".accordion__bloc");
  blocs.forEach(function(bloc){
    const title = bloc.querySelector(".accordion__title");
    title.addEventListener("click",function(){
    toggleAccordion(bloc, blocs);
    })
  })
}
initAccordion();
function toggleAccordion (bloc, blocs) {
  let isOpen = bloc.classList.contains("active");
  let wrapper = bloc.querySelector(".accordion__answer-bloc");
  const content = bloc.querySelector(".accordion__answer");
  if (isOpen){
    bloc.classList.remove("active");
    wrapper.style.height = "0";

  }else {
    blocs.forEach(function(el){
      el.classList.remove("active");
      el.querySelector(".accordion__answer-bloc").style.height = "0";

    })

    bloc.classList.add("active");
    wrapper.style.height = content.clientHeight+"px";

  }
}