// JavaScript Document
$(document).ready(() => {
  const onLandingPage = Boolean($("#home-page").length);
  const onAboutMePage = Boolean($("#about-me-page").length);
  const onSkillsPage = Boolean($("#skills-page").length);
  const onContactPage = Boolean($("#contact-page").length);

  $('[data-toggle="tooltip"]').tooltip();

  if (onLandingPage) {
    const dob = new Date(1994, 3, 27);
    const ftStart = new Date(2017, 3, 10); // full time
    const dobTimeDiff = new Date(Date.now() - dob.getTime());
    const ftTimeDiff = new Date(Date.now() - ftStart.getTime());
    const ageValue = Math.abs(dobTimeDiff.getUTCFullYear() - 1970);
    const ftExpValue = Math.abs(ftTimeDiff.getUTCFullYear() - 1970);

    $("#age").html(`${ageValue} years old`);
    $("#ft-exp").html(`${ftExpValue} years full time`);
    $("#total-exp").html(`${ftExpValue + 4} years total`);
  } else if (onAboutMePage) {
    const quotes = Object.entries({
      "C.S. Lewis": "You can't go back and change the beginning, but you can start where you are and change the ending.",
      "The Whole Earth Catalog": "Stay hungry. Stay foolish.",
      "Anonymous": "Plan for tomorrow, live for today.",
      "Amy Cuddy": "Don't fake it until you make it, fake it until you become it.",
      "Steve Jobs": "Your work is going to fill a large part of your life and the only way to be truly satisfied is to do what you believe is great work and the only way to do great work is to love what you do. If you haven't found it yet, don't settle. As with all matters of the heart, you'll know when you find it and like any great relationship, it just gets better and better as the years roll on.",
      "Bill Watterson": "If good things lasted forever, would we appreciate how precious they are?",
      "Iroh (ATLA)": "Sharing tea with a fascinating stranger is one of life's true delights"
    });
    const truths = [
      "I have a degree in underwater basketweaving.",
      "I lived aboard a military submarine for multiple days.",
      "I can drive stick shift.",
      "I was a member of the salsa club in college.",
      "I founded a gaming club.",
      "I have skydived indoors and outdoors.",
      "I was born with yellow eyes.",
      "I dabble in craft cocktail mixology.",
    ];
    const lies = [
      "I have seen the northern lights (aurora borealis) in person.",
      "I am in the Guiness Book of World Records.",
      "I have bowled a perfect 300.",
      "I learned to play the piano as a kid.",
      "I am allergic to strawberries.",
    ];
    let twoTruths, oneLie;

    function displayRandomQuote() {
      const randIndex = Math.floor(Math.random() * quotes.length);
      const [source, quote] = quotes[randIndex];

      $("#quote").html(quote);
      $("#source").html(source);
    }

    function refreshTTAAL() {
      twoTruths = [...truths].sort(() => Math.random() - Math.random()).slice(0, 2);
      oneLie = lies[Math.floor(Math.random() * lies.length)];
      gameOpts = [...twoTruths, oneLie].sort(() => Math.random() - Math.random());

      $("#opt-1")[0].checked = false;
      $("#opt-2")[0].checked = false;
      $("#opt-3")[0].checked = false;
      $("#opt1-label").html(gameOpts[0]);
      $("#opt2-label").html(gameOpts[1]);
      $("#opt3-label").html(gameOpts[2]);
    }

    $("#refresh-quote").on("click", displayRandomQuote);
    $("#refresh-ttaal").on("click", refreshTTAAL);

    $("#ttaal-submit").on("click", () => {
      const opt1 = $("#opt-1")[0];
      const opt2 = $("#opt-2")[0];
      const opt3 = $("#opt-3")[0];
      let label;

      if (opt1.checked) {
        label = opt1.labels[0].innerHTML;
      } else if (opt2.checked) {
        label = opt2.labels[0].innerHTML;
      } else if (opt3.checked) {
        label = opt3.labels[0].innerHTML;
      }

      if (label) {
        const toast = $("#toast");
        const toastType = $("#toast-type");
        const toastTitle = $("#toast-title");
        const toastMsg = $("#toast-msg");

        if (lies.includes(label)) {
          toastType.html('<i class="fad fa-check text-success"></i>');
          toastTitle.html("Congrats!");
          toastMsg.html("You found the lie! This is still on my bucket list!");
        } else {
          toastType.html('<i class="fad fa-times text-danger"></i>');
          toastTitle.html("Guess again");
          toastMsg.html("This is actually a truth!");
        }

        toast.toast("show");
      }
    });

    displayRandomQuote();
    refreshTTAAL();
  } else if (onSkillsPage) {
    $(".collapse-title, .collapse-title *").on("click", (event) => {
      const { currentTarget, target } = event;

      // skip rotate icon on bubbled events
      if (currentTarget === target) {
        const container = $(target).closest(".collapse-title");
        const chevron = $(container).children(".fad");

        if (chevron) {
          chevron.toggleClass("fa-rotate-180");
        }
      }
    });
  } else if (onContactPage) {
    const contactMeForm = $("#contact-me-form");

    contactMeForm.on("submit", (event) => {
      if (contactMeForm[0].checkValidity()) {
        const alert = $("#success-alert");
        
        alert.removeClass("d-none");
        alert.addClass("show");
      }

      event.preventDefault();
      event.stopPropagation();
      contactMeForm.addClass("was-validated");
    });

    // grecaptcha.ready(() => {
    //   grecaptcha.execute('6LdlBOMUAAAAAHSmd6SWtjdstMO1RmHlzgkSmqn4', { action: 'contact-me' }).then(token => {
    //       ...
    //   });
    // });
  }
});