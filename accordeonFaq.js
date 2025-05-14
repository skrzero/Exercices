// let content = bloc.querySelector('.accordion__answer');
// let wrapper = bloc.querySelector('.accordion__answer-bloc');
// wrapper.style.height = content.clientHeight + 'px';

const titres = document.querySelectorAll(".accordion__title");
console.log(titres);

titres.forEach(element =>{
    element.addEventListener("click", function(){
        const bloc = element.parentElement;
        bloc.classList.toggle('active');
  });
});



