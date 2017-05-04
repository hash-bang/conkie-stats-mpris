conkie-stats-mpris
==================
MPRIS2 plugin for [Conkie-Stats](https://github.com/hash-bang/conkie-stats)

This plugin will attach to the MRPIS DBUS service and update the `mpris` status object on any playback or meta data changes.

Set the desired player in the `mpris.player` key (defaults to `vlc` if unspecified).


**NOTE**: This library requires `dbus` to be working. A common requirement for this is to have the package `libdbus-1-dev` installed on your machine.
