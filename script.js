const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
let apiQuotes = [];

// Show new Quote
function newQuote(){
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    authorText.innerHTML = quote.author;
    quoteText.innerHTML = quote.text;
    
}
// Get Quotes from API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
     const response = await fetch(apiUrl);
     apiQuotes = await response.json();
     newQuote();
    }catch(error){
        // Catch Error Here
    }
}

//onload

getQuotes();