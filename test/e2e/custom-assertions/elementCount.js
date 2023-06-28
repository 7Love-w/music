<<<<<<< HEAD
// A custom Nightwatch assertion.
// The assertion name is the filename.
// Example usage:
//
//   browser.assert.elementCount(selector, count)
//
// For more information on custom assertions see:
// http://nightwatchjs.org/guide#writing-custom-assertions

exports.assertion = function (selector, count) {
  this.message = 'Testing if element <' + selector + '> has count: ' + count
  this.expected = count
  this.pass = function (val) {
    return val === this.expected
  }
  this.value = function (res) {
    return res.value
  }
  this.command = function (cb) {
    var self = this
    return this.api.execute(function (selector) {
      return document.querySelectorAll(selector).length
    }, [selector], function (res) {
      cb.call(self, res)
    })
  }
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:b4cf8e22af22720a28c5e2bcc68d5ca43896efeb50fb38eb8338a7b66682e912
size 792
>>>>>>> c3222162 (code)
