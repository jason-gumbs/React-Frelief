var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("ReactFrelief", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages

  this.timeout(30000);
  it("should send user to the reources page", function(done) {
    // ID for the login button.
    Nightmare({ show: true, typeInterval:1000 })
      .goto(process.env.PORT ||"http://localhost:3000/")
      // Click the resources link
      .click("a[href='/resource']")
      // Evaluate the title
      .evaluate(function() {
        return document.title;
      })
      // Assess the title is as expected
      .then(function(title) {
        expect(title).to.equal("React Reading List");
        done();
      })
      .catch(function(err){
        done(err);
      });
  });

});
