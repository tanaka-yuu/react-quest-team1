module.exports = (getBodyParam) => {
  return '<pre><code>' + JSON.stringify(getBodyParam, null, 2) + '</code></pre>';
};
