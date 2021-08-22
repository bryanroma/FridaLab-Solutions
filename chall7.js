var challenge_07 = Java.use('uk.rossmarks.fridalab.challenge_07');
console.log("Target PIN: " + challenge_07.chall07.value);
for (var i = 9999; i >= 0; i--) {
      if (challenge_07.check07Pin(pad(i, 4))) {
              main.chall07(pad(i,4));
              break;
            }
}
