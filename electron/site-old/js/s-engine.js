function setWindowTitle(title) {
  document.title = title;
}




function formatText(text) {

  text = text.replace(/r§/g, "<red>");
  text = text.replace(/§r/g, "</red>");

  text = text.replace(/o§/g, "<orange>");
  text = text.replace(/§o/g, "</orange>");

  text = text.replace(/y§/g, "<yellow>");
  text = text.replace(/§y/g, "</yellow>");

  text = text.replace(/g§/g, "<green>");
  text = text.replace(/§g/g, "</green>");

  text = text.replace(/a§/g, "<aqua>");
  text = text.replace(/§a/g, "</aqua>");

  text = text.replace(/b§/g, "<blue>");
  text = text.replace(/§b/g, "</blue>");

  text = text.replace(/p§/g, "<purple>");
  text = text.replace(/§p/g, "</purple>");

  text = text.replace(/P§/g, "<pink>");
  text = text.replace(/§P/g, "</pink>");

  text = text.replace(/G§/g, "<gold>");
  text = text.replace(/§G/g, "</gold>");

  text = text.replace(/s§/g, "<grey>");
  text = text.replace(/§s/g, "</grey>");

  text = text.replace(/B§/g, "<brown>");
  text = text.replace(/§B/g, "</brown>");

  text = text.replace(/§n/g, "<br/>");

  return text
}


function clearText() {
  $("#text").html("");
}

function writeText(text) {
  oldtext = $("#text").html();
  $("#text").html(oldtext + formatText(text));
}

function writeLine(text) {
  oldtext = $("#text").html();
  $("#text").html(oldtext + formatText(text) + "<br/>");
}


function writeLines(lines) {
  for (linenum in lines) {
    writeLine(lines[linenum]);
  }
}




function writeTestText () {
  clearText();
  writeLines([
    "I'm Mr b|MESEEKS|b look at G|ME|G!!!",
    "Pssst... s|*burp*|s down here...  its  g|PICKLE RICK!!!|g",
    "In a|Bird Culture|a, that's consided a r|D*** move|r.||",
    "r|red|r o|orange|o y|yellow|y g|green|g a|aqua|a b|blue|b p|purple|p P|pink|P G|gold|G s|grey/silver|s"
  ]);
}



function hideInput() {
  $(".button-container").css({"height": "0", "border-bottom": "0"});
  $(".textfield-container").css("height", "0");

  $(".text-container").css("height", "85vh");

}

function showButtons() {
  $(".button-container").css({"height": "100%", "border-bottom": "5px solid grey"});
  $(".textfield-container").css({"height": "0", "border-bottom": "none"});

  $(".text-container").css("height", "60vh");
}

function showTextfield() {
  $(".button-container").css({"height": "0", "border-bottom": "none"});
  $(".textfield-container").css({"height": "100%", "border-bottom": "5px solid grey"});

  $(".text-container").css("height", "60vh");
}



function setChoiceInput(strs, func) {
  buttonfunc = func;

  $("#o1").css("value", strs[0]);
  $("#o2").css("value", strs[1]);
  $("#o3").css("value", strs[2]);
  $("#o4").css("value", strs[3]);
}

function buttonfunc(num) {
  console.log(num);
}

function setNumChoices(num) {

  switch (num) {
    case 2:
      $(".option-button").css({"height": "10vh", "margin-bottom":"2vh"});

      $("#o3").css("display", "none");
      $("#o4").css("display", "none");
      break;
    case 3:
      $(".option-button").css({"height": "7vh", "margin-bottom":"1vh"});

      $("#o3").css("display", "inline");
      $("#o4").css("display", "none");
      break;
    case 4:
      $(".option-button").css({"height": "5vh", "margin-bottom":"1vh"});

      $("#o3").css("display", "inline");
      $("#o4").css("display", "inline");
      break;
    default:
      console.warn("Invald amount of options for setNumChoices(" + num + "), ignoring");
  }
}


function setPrompt(prompt) {
  if (prompt == null) {
    $("#prompt").html("Press [Space] to continue...");
  }
  else {
    $("#prompt").html(prompt);
  }
}










function init() {
  clearText();
  hideInput();

  setNumChoices(4);
  setPrompt(null);

}
init()



showButtons()
