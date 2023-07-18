var library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isscson",
    readingStatus: true,
  },
  {
    title: "Mockingjay the Final Book of the Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];
library.forEach((books)=>{
    if(!books.readingStatus)
    {
        console.log(`\nYou still need to read ${books.title} by ${books.author}`);
    }
    if(books.readingStatus){
        console.log(`\nAlready read ${books.title} by ${books.author}`);
    }
})