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

    // Check if quthor field is blank and replace it with 'Unknow'

    if(!quote.author){
        authorText.innerHTML  = "Unknown";
    }else{
        authorText.innerHTML = quote.author;
    }
    // Check quote length to determin styling

    if(quote.text.length>120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
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

// Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl,'_blank');
}

// Event Listners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

//onload

getQuotes();