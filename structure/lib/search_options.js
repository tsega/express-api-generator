// Load configuration file
var { DEFAULT_SORT, MAX_PAGE_SIZE } = require("../config");

/*
 *  GetPage
 *
 *  @desc gets the page number for the search
 *
 *  @params {Object} req - the request object containing the search query
 *  @returns {Number} the page search query or the default starting page, i.e. 0
 */
exports.getPage = function(req) {
  return req.query.page ? req.query.page * 1 : 1;
};

/*
 *  GetLimit
 *
 *  @desc gets the maximum number the search results to return
 *
 *  @params {Object} req - the request object containing the search query
 *  @returns {Number} the limit value in the search query or the maximum page page as set in the configuration
 */
exports.getLimit = function(req) {
  if (req.query.limit && req.query.limit < MAX_PAGE_SIZE) {
    return req.query.limit * 1;
  }
  return MAX_PAGE_SIZE;
};

/*
 *  GetSort
 *
 *  @desc gets the sorting field in which the search results are ordered
 *
 *  @params {Object} req - the request object containing the search query
 *  @returns {String} the sort value in the search query or the default sort field as set in the configuration
 */
exports.getSort = function(req) {
  return req.query.sort ? req.query.sort : DEFAULT_SORT;
};

/*
 *  GetFields
 *
 *  @desc gets the fields to return, also know as [projection](http://devdocs.io/mongoose/api#model_Model.find),
 *       for each document in the  search result
 *
 *  @params {Object} req - the request object containing the search query
 *  @returns {string} the fields to return or the default sort field as set in the controller
 */
exports.getFields = function(req, defaultFields) {
  return req.query.fields
    ? req.query.fields.split(",").join(" ")
    : defaultFields.join(" ");
};

/*
 *  GetFilter
 *
 *  @desc gets the condition that filers the search result
 *
 *  @params {Object} req - the request object containing the search query
 *  @returns {Object} the filter condition from the search query or an empty object
 */
exports.getFilter = function(req) {
  let filter = req.query.filter ? JSON.parse(req.query.filter.trim()) : {};

  if (Object.keys(filter).length !== 0) {
    Object.keys(filter).forEach(key => {
      // Only non-ObjectId strings
      if (typeof filter[key] === "string" && !filter[key].match(/^[a-f\d]{24}$/i)) {
        filter[key] = new RegExp(`${filter[key]}`, "i");
      }
    });
  }

  return filter;
};
