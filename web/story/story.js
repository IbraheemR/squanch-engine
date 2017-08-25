var name;

function scene1() {

  setFunctionOnSpace(function(){

  dialogue([
    " a&  Rick &a : H-hey Morty  s& -burp- &s ...",
    " y& Morty &y : Awwe, what now Rick?...",
    " a&  Rick &a : I-I hadda do it M-Morty...",
    " y& Morty &y : Ohh geez...what have you done, Rick?...",
    " a&  Rick &a : I put us into a.. a..a computer Morty! We're nothing but text now!...",
    " y& Morty &y : Wha- Huh?.. wh..why would you do this RICK ?!...",
    " a&  Rick &a : Sh-Shut it, Morty. You know absolutely nothing about this realm.<br/>NOW LET'S  s& -burp- &s  EXPLORE!!"
    ], function() {

  clear();
  setFunctionOnSpace(function(){

  writeLine(" a&  Rick &a : Whoa, I think  s& -burp- &s  there someone watching us...")
  setFunctionOnSpace(function(){

  writeLine(" a&  Rick &a : Who the hell are you?");

  setFunctionOnSpace();

  setPrompt("Answer the question below and press submit.");

  revealTextField();

  setQuestion("Who the hell are you?", function(answer) {

  name = answer;

  writeLine(" a&  Rick &a : Well hello  p& " + name + " &p ");

  concealInput();
  setPrompt();

  dialogue([
    " y& Morty &y : R-Rick are you sure we can trust this guy?...",
    " a&  Rick &a : Relax Morty, they seem nice en s& -burp- &s ough...",
    " y& Morty &y : Oh-ok Rick if you say so...",
    " a&  Rick &a : Yeah, Morty, well I do say  s& -burp- &s so. So..."
    ], function() {

  clear();
  writeLine(" r& Fin! &r ");
  setPrompt(" r& Fin! &r ");

  setFunctionOnSpace()

  })})})})})})
}



scene1();
