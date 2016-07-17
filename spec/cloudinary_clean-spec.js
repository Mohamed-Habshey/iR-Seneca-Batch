
var node = require('../bin/www');

var request = require("request-promise");


var base_url = "http://localhost:3000/";

 

describe("Cloudinary Clean", function() {

  
  afterAll(function() {
    // Shut the server down when we're done
    node.closeServer();
  });
  describe("Routes", function() {

    
    it("Get / should returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        
        done();
      });
    });

     it("Get /cloudinary should returns status code 200 & images >= 3359", function(done) {
      request.get(base_url+'cloudinary', function(error, response, body) {
       
        expect(response.statusCode).toBe(200);
         expect(JSON.parse(body).size).toBeGreaterThan(3359);
         expect(JSON.parse(body).images).toBeTruthy();
        
        done();
      });
    },  50000);

    // it("returns Hello World", function(done) {
    //   request.get(base_url, function(error, response, body) {
    //     expect(body).toBe("Hello World");
    //     done();
    //   });
    // });
  });
});



