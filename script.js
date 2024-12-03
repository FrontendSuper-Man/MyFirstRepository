//1
const books = document.querySelectorAll('.book')
books[1].before(books[4])
books[0].before(books[1])
books[5].after(books[2])

//2
document.querySelector('body').style.backgroundImage = "url('/image/you-dont-know-js.jpg')";

//3
books[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов'

//4
document.querySelector('.adv').remove()

//5
const secondBook = books[0].querySelectorAll('ul > li');
secondBook[3].after(secondBook[6])
secondBook[6].after(secondBook[8])
console.log(secondBook);

const fifthBook = books[5].querySelectorAll('ul > li');
fifthBook[4].after(fifthBook[2])
fifthBook[7].after(fifthBook[5])
fifthBook[3].before(fifthBook[9])
console.log(fifthBook);

//6
const title8 = document.createElement('li')
title8.textContent = "Глава 8: За пределами ES6"
books[2].querySelector('ul').append(title8)

const sixthBook = books[2].querySelectorAll('ul > li');
sixthBook[8].after(sixthBook[10])

