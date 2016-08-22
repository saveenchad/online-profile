$(document).ready(function(){
  $('.parallax').parallax();
  $('.tabs').tabs();

  var quotes = [
    "\"Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the \"present.\" -- Anonymous",
    "\"People may hear your words, but they feel your attitude.\" -- John Maxwell",
    "\"Don't cry because it's over, smile because it happened.\" -- Dr. Seuss",
    "\"Happiness is not a destination, it's a way of life.\" -- Anonymous",
    "\"It is the working man who is the happy man. It is the idle man who is the miserable man.\" -- Benjamin Franklin",
    "\"Design is a funny word. Some people thing design means how it looks. But of course, if you dig deeper, it's really how it works.\" -- Steve Jobs",
    "\"Experience is what you receive when you don't get what you want.\" -- Anonymous",
    "\"Stay hungry, stay foolish\" -- Stewart Brand",
    "\"Laughter heals all wounds, and that's one thing that everybody shares. No matter what you're going through, it makes you forget about your problems.\" -- Kevin Hart",
    "\"Start by doing what's necessary; then do what's possible; and suddenly you're doing the impossible.\" -- Francis of Assisi",
    "\"Our greatest glory is not in never falling, but in rising every time we fall.\" -- Confucius"
  ];
  var quoteIndex = Math.floor(Math.random() * quotes.length);

  var bDate = new Date('04/27/1994'), currDate = new Date(), diff = currDate.getFullYear() - bDate.getFullYear();

  $('#quote').text(quotes[quoteIndex]);
  $('#age').text(diff);

  $('.tab').click(function() {
    $('html, body').animate({scrollTop: 400}, 750);
  });
});
