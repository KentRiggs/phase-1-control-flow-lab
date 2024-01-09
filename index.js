function scuberGreetingForFeet(ride){
  if (ride < 400) {
    return "This one is on me!";
} 
else if (ride >= 400 && ride <=2000) { 
  return "That will be twenty bucks."
}
else if (ride > 2500) {
  return "No can do.";
}
else if (ride > 2000) {
  return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(city){
let isNYC = city === "NYC";
let response = isNYC ? "Ok, sounds good." : "No go.";
return response;
}

function switchOnCharmFromTip(tipAmount){
let response;

switch (tipAmount) {
  case "generous":
    response = "Thank you so much.";
    break;
  case "not as generous":
    response = "Thank you.";
    break;
  default:
    response = "Bye.";
}
return response;
}