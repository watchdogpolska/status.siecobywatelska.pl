// array of Monitor-specific API keys or Main API key to list all monitors
var __apiKeys = [
	'm776832545-41f9062c659812c7409d7a30', // serwer grazyna - ping
	'm776832547-4c86a7ae5e99eefbcb18d45d', // serwer ewelina - ping
	'm776832548-81b3b8aed77589e40c03ca66', // serwer dorota - ping
	'm776832552-c263a8110fb3e49cb6ce0c4a', // serwer helena - ping
	'm776832554-70cc70faf2c4d0a53bf0ea35', // serwer joanna - ping
	'm776832557-30a6ae170e41d8bbb3b61efa', // serwer klara - ping
	'm776913747-3e6f59b217090bc0f0edff25', // serwer laura - ping
	'm776832572-8a503b4b9120719d67e21e8', // informacjapubliczna.org - kywd
	'm776307967-ca38ae71e9dc64075556cfdc', // siecobywatelska.pl - kywd
	'm776832574-c30477774587ce95d34db26b', // watchdogportal.pl - kywd
	'm776846721-6438d7a364e71c71429fb427', // mail.siecobywatelska.pl - kywd
	'm777124326-0a664a1457970ac65636b8cc', // poradnia.siecobywatelska.pl - kywd
];

// refresh interval (in seconds)
var __refresh = 300;

// the default language
// set false to disable language support and show only english,
// or set null to use visitor's browser language
var __language = null;
