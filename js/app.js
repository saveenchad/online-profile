document.onContentLoad = function(){
  $('.parallax').parallax();
  $('.tabs').tabs();

  var quotes = [
    "\"Stay hungry, stay foolish\" -- Stewart Brand",
    "\"In case of fire:\n1. git commit\n2. git push\n3. leave building\" -- Anonymous"
  ];

  var quoteIndex = Math.floor(Math.random() * quotes.length);

  $('#quote').text(quotes[quoteIndex]);
};
