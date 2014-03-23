Shutdown service
==================

This is a little Python script that you should execute on boot of your Raspberry Pi. It starts a daemon which always runs in the background, and waits for the message "shutdown" to shutdown your Pi.

This can be useful for example when you run your Pi as a standalone device, and you have no other computer, no script, therefore no way to shut-it down. You can then hook up a control which will send "shutdown" to our little Python service here and the Pi will politely shut down.


How to send the message
------------------------

The Python daemon is listening for TCP connections on the port 44555. Therefore, you must open a TCP connection, and send the string "shutdown". In some cases it is simpler to do that rather than executing the `shutdown` command directly (for example, when running an environment that doesn't support executing shell commands). Also it saves you from running your program as root, which is always better.


Installation
--------------

Installing is very simple. Copy `shutdown.py` to `/home/pi` and copy `shutdown-service` to `/etc/init.d`. Connect to your Pi and make sure that `shutdown-service` is executable by running `chmod a+x /home/etc/init.d/shutdown-service`. Next, activate the service on boot by running `sudo update-rc.d shutdown-service defaults`. And that's it!!! Now reboot your Pi, and reconnect to it. If you run `ps aux | grep shutdown` you should see something like this :

```
root      1962  0.4  1.0   8864  4688 ?        S    13:57   0:00 python /home/pi/shutdown.py
```