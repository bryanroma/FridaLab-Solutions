// Use Java.use if the method is static
// Use Java.choose for an instance method
//
setTimeout(function () {
            Java.perform(function() {
            var main;
            Java.choose('uk.rossmarks.fridalab.MainActivity', {
            onMatch: function(instance) {
                console.log("[*] Running chall02 . . .");
                main = instance;
                console.log("[*] Done! Go check! ;)");
            },
            onComplete: function() {
                main.chall02();
                }
        });
    });
});
