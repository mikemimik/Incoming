var fs = require('fs');
var path = require('path');

module.exports = {
  /**
   * Checks whether a path starts with or contains a hidden file or a folder.
   * @param {string} source - The path of the file that needs to be validated.
   * returns {boolean} - `true` if the source is blacklisted and otherwise `false`.
 */
  isUnixHiddenPath: function (path) {
    return (/(^|\/)\.[^\/\.]/g).test(path);
  }
};