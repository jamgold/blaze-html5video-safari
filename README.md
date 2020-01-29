Small (experimental) package to help rendering <video> elements in Meteor Blaze on Safari

Here are the template parameters. The only mandatory one is `src`, the rest is optional. With `browserCheck` it is possible to override the testing for Mac OS X Safari

```
{{>html5video
  src="..."
  browserCheck=true
  controls=true
  inline=true
  loop=false
  autoplay=true
  classes="img-fluid rounded-lg"
}}
```