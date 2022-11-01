const filmButton = document.querySelector('#film-name-button');
function handlerProperty(e){
  console.log(e)
  const films = ['Алиса в стране чудес', 'Мстители','Город мертвых', 'Призрачный гонщик']


  // Посмотреть innerHTML. и обнулить контейнер
  const filmsList = document.querySelector('.usefull-info-left__list');
  filmsList.innerHTML = ''
  // while (filmsList.firstChild) {                       Было / Стало
  //   filmsList.removeChild(filmsList.firstChild);
  // }
  
  
  let input = document.getElementById('film-name-text').value ;
  
  
  const filterFilmsList = films.filter( (film) => film.includes(input));
  
  const contentString =
  filterFilmsList.map((item,index) => `
      <li class="usefull-info-left__item">${item}</li>
    `).join('') 
  filmsList.insertAdjacentHTML('beforeend', contentString);
}
if(filmButton){
  filmButton.addEventListener('click', handlerProperty )  
}
handlerProperty('click');
const icon__list_button = document.getElementById('icon__list-button');
const icon__grid_button = document.getElementById('icon__grid-button');

const article_ = document.querySelector('.article');


if(icon__list_button){
  // console.log('zashli v function')
  icon__list_button.addEventListener('click', (e) => {
    console.log(e)
    let article_contents = document.querySelectorAll('.article-content');
    let article__contents = document.querySelectorAll('.article__content');
    article_.classList.add('article--list');
    icon__list_button.classList.add('icon__button--active');
    icon__grid_button.classList.remove('icon__button--active');
  
    article_contents.forEach((article_contents) => {
      article_contents.classList.add('article-content--list');
    });
    
    article__contents.forEach((article__contents) => {
      article__contents.classList.add('article__content--list');
    });
  });
}
if(icon__grid_button){

  icon__grid_button.addEventListener('click',(e) => {
    console.log(e)
    let article_contents = document.querySelectorAll('.article-content');
    let article__contents = document.querySelectorAll('.article__content');
    
    icon__list_button.classList.remove('icon__button--active');
    icon__grid_button.classList.add('icon__button--active');

    article_.classList.remove('article--list');
  
    article_contents.forEach((article_contents) => {
      article_contents.classList.remove('article-content--list');
    });
    
    article__contents.forEach((article__contents) => {
      article__contents.classList.remove('article__content--list');
    });
  });
}

const article_add__button = document.getElementById('article-add__button'); 
const article_add__button_cancel = document.getElementById('article-add__button-cancel');
const article_add__button_create = document.getElementById('article-add__button-create');
const form = document.querySelector('.form');
const faq_ = document.querySelector('.faq');
// form.submit(function (e) {
//   return false
// });


if(article_add__button){
  //console.log('zashliv v dobavleniye')
  article_add__button.addEventListener('click', (e) => {
    //console.log(form);
    if(form){
      faq_.style.display='none';
      article_add__button.style.display = 'none';
      form.style.display = 'flex';
    }
  });
}
if(article_add__button_create){
  form.addEventListener('submit',(e)=>{
    let input_name = document.getElementById('article-text-name').value ;
    let input_url = document.getElementById('article-text-url').value ;
    let input_text = document.getElementById('article-text-description').value ;
    let now = new Date();
    const articles = document.querySelector('.article');

    const contentString = 
    `<article class="article-content">
    <img class="article__img" src="${input_url}" alt="">
    <div class="article__content">
        <div class="article__wrapper">
            <h3 class="article__title">${input_name}</h3>
            <p class="article__text">${input_text}</p>    
        </div>
        <footer>
            <p class="article__date">${now.toLocaleString('en', {month:'long'})} ${now.getDate()}, ${now.getFullYear()} · 4 min read</p>
        </footer>
    </div>
    </article>`
    articles.insertAdjacentHTML('beforeend', contentString);

    if(form){
      faq_.style.display='block';
      article_add__button.style.display = 'block';
      form.style.display = 'none';
      };
  });
}
if(article_add__button_cancel){
  article_add__button_cancel.addEventListener('click',(e)=>{
    if(form){
      faq_.style.display='block';
      article_add__button.style.display = 'block';
      form.style.display = 'none';
    };
  });
}

const faq = document.getElementsByClassName("faq-page__question");
let i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {

        this.classList.toggle("active");

        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
