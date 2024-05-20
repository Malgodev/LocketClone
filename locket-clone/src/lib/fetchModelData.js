function getModel(url) {
  return new Promise(function(resolve, reject) {
      console.log(`Fetching data from GET ${url}`);

      const request = new XMLHttpRequest();
      request.onreadystatechange = function() {
          if (this.readyState === 4) {
              if (this.status === 200) {
                  resolve({ data: JSON.parse(this.responseText) });
              } else {
                  reject(new Error(`GET request failed with status ${this.status}: ${this.statusText}`));
              }
          }
      };

      request.onerror = function() {
          reject(new Error('Network error'));
      };

      request.open("GET", url, true);
      request.send();
  });
}

function pushModel(url, requestData) {
  return new Promise(function(resolve, reject) {
      console.log(`Pushing data to POST ${url}`);

      const request = new XMLHttpRequest();
      request.onreadystatechange = function() {
          if (this.readyState === 4) {
              if (this.status === 200) {
                  resolve({ data: JSON.parse(this.responseText) });
              } else {
                  reject(new Error(`POST request failed with status ${this.status}: ${this.statusText}`));
              }
          }
      };

      request.onerror = function() {
          reject(new Error('Network error'));
      };

      request.open("POST", url, true);
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify(requestData));
  });
}

const server = {
  getModel,
  pushModel
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { server };
} else {
  window.server = server;
}
