//1st error
function shout(string) {
  return string.toUpperCase();
}
//2nd error
function whisper(string) {
  return string.toLowerCase();
}
//3rd error 
function logShout(string) {
    console.log(string.toUpperCase())
  }
//4th error
function logWhisper(string) {
    console.log(string.toLowerCase())
  }
//5-7 error 
function sayHiToHeadphonedRoommate(string) {
  let result
  
  if (string === "Let's have dinner together!") {
    result = ("I would love to!")
  }
  if (string === string.toLowerCase()) {
    result = ("I can't hear you!")
  }
  if (string === string.toUpperCase()) {
    result = ("YES INDEED!")
  }
  return (result)
}