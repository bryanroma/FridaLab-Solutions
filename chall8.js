var button = Java.use('android.widget.Button');
var checkid = main.findViewById(2131165231);
var check = Java.cast(checkid.$handle, button);
var string = Java.use('java.lang.String');
check.setText(string.$new("Confirm"));
