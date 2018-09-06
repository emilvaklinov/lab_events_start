document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const theForm = document.querySelector('#new-item-form');
  theForm.addEventListener('submit', handleFormSubmition);
})


const handleFormSubmition = function( event ){
  event.preventDefault();
  let paragrphResult1 = document.createElement('p');
  let paragrphResult2 = document.createElement('p');
  let paragrphResult3 = document.createElement('p');

  const title = event.target.title.value
  const author = event.target.author.value
  const category = event.target.category.value

  paragrphResult1.textContent = `Title: ${title}`;
  paragrphResult2.textContent = `Author:${ author}`;
  paragrphResult3.textContent = `Category: ${category}`;
  const addedBooks = document.querySelector('#added_books');
  addedBooks.appendChild(paragrphResult1);
  addedBooks.appendChild(paragrphResult2);
  addedBooks.appendChild(paragrphResult3);
  document.querySelector('#new-item-form').reset();
}