// JavaScript Document
$(document).ready(() => {
  const onAboutMePage = Boolean($("#quote").length) && Boolean($("#source").length);

  $('[data-toggle="tooltip"]').tooltip();

  $("#ttaal-submit").on("click", () => {
    const opt1 = $("#opt-1")[0].checked;
    const opt2 = $("#opt-2")[0].checked;
    const opt3 = $("#opt-3")[0].checked;
    const noOptSelected = !opt1 && !opt2 && !opt3;

    if (!noOptSelected) {
      const toast = $("#toast");
      const toastType = $("#toast-type");
      const toastTitle = $("#toast-title");
      const toastMsg = $("#toast-msg");

      if (opt1) {
        toastType.html('<i class="fad fa-check text-success"></i>');
        toastTitle.html("Congrats!");
        toastMsg.html("You found the lie! This is still on my bucket list!");
      } else if (opt2 || opt3) {
        toastType.html('<i class="fad fa-times text-danger"></i>');
        toastTitle.html("Guess again");
        toastMsg.html("This is actually a truth!");
      }

      toast.toast("show");
    }
  });

  $(".collapse-title").on("click", (event) => {
    const chevron = $(event.target).children(".fad");

    if (chevron) {
      chevron.toggleClass("fa-rotate-180");
    }
  });

  if (onAboutMePage) {
    const quotes = Object.entries({
      "C.S. Lewis": "You can't go back and change the beginning, but you can start where you are and change the ending.",
      "The Whole Earth Catalog": "Stay hungry. Stay foolish.",
      "Anonymous": "Plan for tomorrow, live for today.",
      "Amy Cuddy": "Don't fake it until you make it, fake it until you become it.",
      "Steve Jobs": "Your work is going to fill a large part of your life and the only way to be truly satisfied is to do what you believe is great work and the only way to do great work is to love what you do. If you haven't found it yet, don't settle. As with all matters of the heart, you'll know when you find it and like any great relationship, it just gets better and better as the years roll on.",
      "Bill Watterson": "If good things lasted forever, would we appreciate how precious they are?"
    });
    const randIndex = Math.floor(Math.random() * quotes.length);
    const [source, quote] = quotes[randIndex];

    $("#quote").html(quote);
    $("#source").html(source);
  }
});