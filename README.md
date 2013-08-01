# simple-p3p: Send P3P headers to IE only. 

## Intro

Conditionally send P3P headers to IE. Trade a little CPU for a little bandwidth.

Uses [`useragent`][useragent] to detect IE, based on real-world user-agent data
gathered by browserscope.

No P3P validation included. Since IE accepts *any* string in the P3P header,
the simplest solution is to follow [Google's example][1] and just link to your
existing privacy policy.

## Installation

    npm install simple-p3p

## Usage

1. copy config.example.json to config.json and set your privacy policy
2. load it: `var simple-p3p = require('simple-p3p')`
3. register with express at startup: `app.use(simple-p3p)`

## Tests

    npm test

## License

Apache 2

[1]: http://blogs.msdn.com/b/ie/archive/2012/02/20/google-bypassing-user-privacy-settings.aspx
[useragent]: https://github.com/3rd-Eden/useragent
