document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const theForm = document.querySelector('#new-item-form');
  theForm.addEventListener('submit', handleFormSubmition);

  const button = document.querySelector('#clear_button');
  button.addEventListener('click', handleClearButttonClick);
})


const handleFormSubmition = function( event ){
  event.preventDefault();
  let paragrphResult = document.createElement('li');
  const title = event.target.title.value
  const author = event.target.author.value
  const category = event.target.category.value

  paragrphResult.textContent = `Title: ${title} Author:${author} Category: ${category}`;
  const addedBooks = document.querySelector('#added_books');
  addedBooks.appendChild(paragrphResult);
  document.querySelector('#new-item-form').reset();
}



const handleClearButttonClick= function(){
  const para = document.querySelector('#added_books');
  para.textContent = "";
}
