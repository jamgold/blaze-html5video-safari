// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by blaze-html5video-safari.js.
import { name as packageName } from "meteor/blaze-html5video-safari";

// Write your tests here!
// Here is an example.
Tinytest.add('blaze-html5video-safari - example', function (test) {
  test.equal(packageName, "blaze-html5video-safari");
});
