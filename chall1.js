Java.perform(function (){
    // Class name that stores function to hook
    var xploit = Java.use("uk.rossmarks.fridalab.challenge_01");
    xploit.chall01.value = 1;
    console.log("[*] Hooked the variable!");
    console.log("[*] chall01 value is: ", xploit.chall01.value);

});

