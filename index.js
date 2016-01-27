var mpris = require('mpris');
var os = require('os');

module.exports = {
	settings: {
		mpris: {
			player: 'vlc',
		},
	},
	register: function(finish, parentStats) {
		if (os.platform() != 'linux') return finish('MPRIS only available on Linux platforms');

		mpris.Player
			.on('MetadataChanged', function(meta) {
				parentStats.update({
					mpris: {
						meta: meta,
					},
				});
			})
			.on('PlaybackStatusChanged', function(stat) {
				parentStats.update({
					mpris: {
						status: stat,
					},
				});
			});

		mpris.connect(this.settings.mpris.player, function(err) {

			// Force firing of events we are listening for so we get the currently playing info {{{
			mpris.Player.GetMetadata(function(err, data) {
				mpris.Player.emit('MetadataChanged', data);
			});

			mpris.Player.GetPlaybackStatus(function(err, data) {
				mpris.Player.emit('PlaybackStatusChanged', data);
			});
			// }}}

			finish(err);
		});
	},
};
