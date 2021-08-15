setTimeout(function () {
  Java.perform(function () {
    // Chall06
    var challenge_06 = Java.use('uk.rossmarks.fridalab.challenge_06');
    challenge_06.addChall06.overload('int').implementation = function (arg0) {
      console.warn("Solved Challenge 06");
      Java.choose('uk.rossmarks.fridalab.MainActivity', {
        onMatch: function(instance) {
          instance.chall06(challenge_06.chall06.value);
        },
        onComplete: function() {}
      });
    }
  })
}, 10000);