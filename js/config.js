// array of Monitor-specific API keys or Main API key to list all monitors
var __apiKeys = [
// 	'm776832548-81b3b8aed77589e40c03ca66', // serwer dorota - ping
// 	'm776832554-70cc70faf2c4d0a53bf0ea35', // serwer joanna - ping
// 	'm776832557-30a6ae170e41d8bbb3b61efa', // serwer klara - ping
	'm776913747-3e6f59b217090bc0f0edff25', // serwer laura - ping
// 	'm778094606-4ea11db44ef7c2578a80f736', // serwer rita - ping
	'm776832572-8a503b4b9120719d67e21e8a', // informacjapubliczna.org - kywd
	'm776832571-cfb4b586fed7422c65a00692', // siecobywatelska.pl - kywd
	'm776832574-c30477774587ce95d34db26b', // watchdogportal.pl - kywd
	'm776846721-6438d7a364e71c71429fb427', // mail.siecobywatelska.pl - kywd
	'm777124326-0a664a1457970ac65636b8cc', // poradnia.siecobywatelska.pl - kywd
// 	'm777124330-a72a330ae4bba7e44e245d5a', // watchdogforum.org - kywd
	'm777124334-755921454226684cdc781ca9', // panel.siecobywatelska.pl - kywd
	'm777740989-a700bbdfb9cd03028d4c3dcb', // dyski.siecobywatelska.pl - kywd
// 	'm777740981-c5bb92158099261739c395db', // kontrola.siecobywatelska.pl - kywd
	'm777860196-47e41c4b007364d4d75d18a6', // spolki.siecobywatelska.pl - kywd
	'm777981588-d2d0f4b79eeb1d32c57c6823'  // limonka.siecobywatelska.pl - kywd
];

// refresh interval (in seconds)
var __refresh = 300;

// the default language
// set false to disable language support and show only english,
// or set null to use visitor's browser language
var __language = null;
