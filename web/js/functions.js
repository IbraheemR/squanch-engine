//menu functions



//body functions

function clear() {
  $("#body.text").html("");
}

function format(text) {

  text = text.replace(/ r& /g, "<red>")
  text = text.replace(/ &r /g, "</red>")

  text = text.replace(/ o& /g, "<orange>")
  text = text.replace(/ &o /g, "</orange>")

  text = text.replace(/ y& /g, "<yellow>")
  text = text.replace(/ &y /g, "</yellow>")

  text = text.replace(/ g& /g, "<green>")
  text = text.replace(/ &g /g, "</green>")

  text = text.replace(/ a& /g, "<aqua>")
  text = text.replace(/ &a /g, "</aqua>")

  text = text.replace(/ b& /g, "<blue>")
  text = text.replace(/ &b /g, "</blue>")

  text = text.replace(/ p& /g, "<purple>")
  text = text.replace(/ &p /g, "</purple>")

  text = text.replace(/ P& /g, "<pink>")
  text = text.replace(/ &P /g, "</pink>")

  text = text.replace(/ G& /g, "<gold>")
  text = text.replace(/ &G /g, "</gold>")

  text = text.replace(/ s& /g, "<grey>")
  text = text.replace(/ &s /g, "</grey>")

  text = text.replace(/ B& /g, "<brown>")
  text = text.replace(/ &B /g, "</brown>")

  return text
}

function writeLine(line) {
  line = format(line)

  let old = $("#body.text").html();
  $("#body.text").html(old + "<br/>" + line);

  $('#body.page-struct').animate({scrollTop: $(this).height()});
}

function writeLines(lines) {
  for (linenum in lines) {
    writeLine(lines[linenum]);
  }

}

function writeRaw(text) {
  text = forma(text)

  let old = $("#body.text").html();
  $("#body.text").html(old + text);

  $('#body.page-struct').animate({scrollTop: $(this).height()});
}

function dialogue(lines, thenfunc) {
  let counter = 0;

  setFunctionOnSpace(function(){
    if (counter < lines.length) {
      writeLine(lines[counter]);
      counter ++;
    } else if (thenfunc){
        thenfunc()
    }
    })

}

function fadeInText() {
  $("#body.text").fadeIn()
}

function fadeOutText() {
  $("#body.text").fadeOut()
}
//prompt functions

function setPrompt(prompt) {
  if (prompt) {
    prompt = format(prompt)

    $("#prompt.text").html(prompt)
  } else {
    $("#prompt.text").html("Press [Space] to continue")
  }
}


//input functions
function hideInput() {
  $("#input.page-struct").css("height", "0");
  $("#body.page-struct").css("height", "85vh");

  $("#buttons.input").css("display", "none");
  $("#textfield.input").css("display", "none");
}

function concealInput() {
  $("#input.page-struct").animate({height: 0});
  $("#body.page-struct").animate({height: "85vh"}, 400, "swing", function() {

    $("#buttons.input").css("display", "none");
    $("#textfield.input").css("display", "none");
  });
}

function showButtons() {
  $("#input.page-struct").css("height", "25vh");
  $("#body.page-struct").css("height", "60vh");

  $("#buttons.input").css("display", "block");
  $("#textfield.input").css("display", "none");
}

function revealButtons() {
  $("#input.page-struct").animate({height: "25vh"});
  $("#body.page-struct").animate({height: "60vh"});

  $("#buttons.input").css("display", "block");
  $("#textfield.input").css("display", "none");

}

function setNumButtons(num) {
  switch (num) {
    case 2:
      $("#o1.button").css("height", "50%");
      $("#o2.button").css("height", "50%");
      $("#o3.button").css("height", "0");
      $("#o4.button").css("height", "0");
      break;
    case 3:
      $("#o1.button").css("height", "33%");
      $("#o2.button").css("height", "33%");
      $("#o3.button").css("height", "33%");
      $("#o4.button").css("height", "0");
      break;
    case 4:
      $("#o1.button").css("height", "25%");
      $("#o2.button").css("height", "25%");
      $("#o3.button").css("height", "25%");
      $("#o4.button").css("height", "25%");
      break;
    default:
      console.warn("Invalid number of buttons; setNumButtons(" + num + "), ignoring!")
  }
}

function setOptions(options, func) {
  if (func) _buttonfunc = func;

  for (opt in options) {
    let num = String(Number(opt)+1);
    $("#o" + num).attr("value", num + ") " + format(options[opt]));
  }
}

function showTextField() {
  $("#input.page-struct").css("height", "15vh");
  $("#body.page-struct").css("height", "70vh");

  $("#buttons.input").css("display", "none");
  $("#textfield.input").css("display", "block");

}

function revealTextField() {
  $("#input.page-struct").animate({height: "15vh"});
  $("#body.page-struct").animate({height: "70vh"});

  $("#buttons.input").css("display", "none");
  $("#textfield.input").css("display", "block");
}

function setQuestion(question, func) {
  if (func) _questionfunc = func;

  $("#textfield-label.text").html(format(question));
}

function setFunctionOnSpace(func) {
  if (!func) func = function(){};

  document.onkeyup = function(e) {
    if (e.keyCode == 32 && !($(".textfield").is(":focus"))) {
      func();
    }
  }
}


function _buttonfunc(num) { //can be overriden by story
  console.log(num);
}

function __answerhandler() {
  let answer = __getanswer();

  _questionfunc(answer);

  $(".textfield").val("");
}

function _questionfunc(answer) { //can be overriden by story
  console.log(answer);
}

function __getanswer() {
  return $(".textfield").val();
}


//generic functions

function reset() {
  setPrompt();

  setNumButtons(4)
  setQuestion("Question?")

  hideInput();

  setFunctionOnSpace(function(){console.log("SPACE")});

}

function setTitle(text) {
  $("title").html(text)
}

// init calls
reset();


//showTextField();
