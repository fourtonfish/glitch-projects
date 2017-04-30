# Custom Glitch projects page

## Authorization token

First, we need to find out your authorization token. (You can click images below to see larger versions.)

If you're using the Chrome browser, press `CTRL+SHIFT+J` (or `COMMAND+OPTION+J` on Mac OS/OSX). This will bring up the browser's developer tools. Switch to the Network tab and reload the page.

[![Chrome network tab](https://cdn.glitch.com/eaf0fbbf-81a0-41cf-9748-2c388e54b56c%2Fnetwork-chrome-1.png?1493562162260)](https://cdn.glitch.com/eaf0fbbf-81a0-41cf-9748-2c388e54b56c%2Fnetwork-chrome-1.png?1493562162260)

You will see all the network requests your browser is making. Type `boot` into the `Filter` box. You will see something like `boot?authorization=abc...`. 

[![Chrome network tab, image two](https://cdn.glitch.com/eaf0fbbf-81a0-41cf-9748-2c388e54b56c%2Fnetwork-chrome-2.png?1493562161977)](https://cdn.glitch.com/eaf0fbbf-81a0-41cf-9748-2c388e54b56c%2Fnetwork-chrome-2.png?1493562161977)

Right-click this text and use the menu to copy the URL. It's going to look like this:

`https://api.glitch.com/boot?authorization=abcd123-efg4-hij5-klm6-nopqrst789`

If you're using Firefox, the process is the same, but the shortcut for developer tools is `CTRL+SHIFT+Q` (`COMMAND+OPTION+Q` on Mac OS/OSX).

[![Firefox network tab](https://cdn.glitch.com/eaf0fbbf-81a0-41cf-9748-2c388e54b56c%2Fnetwork-ff.png?1493565726113)](https://cdn.glitch.com/eaf0fbbf-81a0-41cf-9748-2c388e54b56c%2Fnetwork-ff.png?1493565726113)

## .ENV

Now you can update your `.env` file using the value of the authorization token:

```
NAME=Stefan
AUTHORIZATION=abcd123-efg4-hij5-klm6-nopqrst789
EXCLUDE=secret-project,evil-plans
```
You can change your name, and if you'd like to exclude any projects, you can also update the `EXCLUDE` variable.
