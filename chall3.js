Java.perform(function (){
    // Class name that stores function to hook
    var xploit = Java.use("uk.rossmarks.fridalab.MainActivity");
    xploit.chall03.implementation = function(){
        console.log("[*] Return true in chall03. ");
        return true;
    };
});

