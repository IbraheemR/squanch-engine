exports.name = "Some test story thing";

var data = {name: null};

exports.mainScene= function() {
  setTitle("Demo Story")

  setFunctionOnSpace(function(){

  dialogue([
    " s&  ?? &s : Hey-hey dude wake up...",
    " y& You &y : Wha... what!?...",
    " s&  ?? &s : Get up...",
    ], function() {

  writeLine(" s&  ?? &s : Who are you soilder?");

  setFunctionOnSpace();

  setPrompt("Answer the question below and press submit.");

  revealTextField();

  setQuestion("Who are you?", function(answer) {

  data.name = answer;

  writeLine(" a& Tom &a : Well hello  y& " + data.name + " &y , I'm Tom...");

  concealInput();
  setPrompt();

  dialogue([
    " y& You &y : Where... where am I?",
    " a& Tom &a : Relax  y& " + data.name + " &y , you're safe now...",
    " a& Tom &a : Come back to the shelter, we'll get you cleaned up..."
    ], function() {


  fadeOutText();

  setTimeout(function(){
  clear();
  writeLine(" r& Fin! &r ");
  setPrompt(" r& Fin! &r ");

  fadeInText(400);

  setFunctionOnSpace()
  }, 400);

  })})})})
}
