// Use Java.use if the method is static
// Use Java.choose for an instance method
//
setTimeout(function () {
            Java.perform(function() {
            var main;
            Java.choose('uk.rossmarks.fridalab.MainActivity', {
            onMatch: function(instance) {
                console.log("[*] Loading mainactivity . . .");
                main = instance;
                console.log("[*] Done!");
            },
            onComplete: function() {
                main.chall04('frida');
                console.log("[*] Finished! Go check!");
                }
        });
    });
});
