const quotes = [
    "Be yourself; everyone else is already taken.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Everything you can imagine is real.",
    "The only impossible journey is the one you never begin.",
    "Do what you can, with what you have, where you are.",
    "All our dreams can come true if we have the courage to pursue them.",
    "The secret of getting ahead is getting started.",
    "Whatever you are, be a good one.",
    "You miss 100% of the shots you don't take.",
    "The only thing we have to fear is fear itself.",
    "If you tell the truth, you don't have to remember anything.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Life is what happens when you're busy making other plans.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Without music, life would be a mistake.",
    "It is better to be hated for what you are than to be loved for what you are not.",
    "The only way to do great work is to love what you do.",
];

const authors = [
    "Oscar Wilde",
    "Albert Einstein",
    "Mahatma Gandhi",
    "Robert Frost",
    "Eleanor Roosevelt",
    "Pablo Picasso",
    "Tony Robbins",
    "Theodore Roosevelt",
    "Walt Disney",
    "Mark Twain",
    "Abraham Lincoln",
    "Wayne Gretzky",
    "Franklin D. Roosevelt",
    "Mark Twain",
    "Winston Churchill",
    "John Lennon",
    "Oscar Wilde",
    "Friedrich Nietzsche",
    "Andre Gide",
    "Steve Jobs",
];

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index];
    author.textContent = `- ${authors[index]}`;
});