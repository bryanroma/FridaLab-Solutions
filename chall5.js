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
                }
        });
                main.chall05.overload('java.lang.String').implementation = function(arg0){
                    this.chall05.overload('java.lang.String').call(this,'frida');
                    console.log("[*] Go check!")
                    return;
                };
    });
});
