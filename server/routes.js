const fs = require('fs');

module.exports = function(app){
    // POST - Adding or Updating the Images
    app.post("/updateImage", (req,res) => {
    const blobLink = req.body.blob.slice(27);
    const path = '../public/draw_' + blobLink + '.png';
    
    const canvas = req.body.canvas;
    const base64 = canvas.replace(/^data:image\/\w+;base64,/, "");//Remove the front part of the image base64 code data:image/png;base64
         const dataBuffer = new Buffer.from(base64,'base64'); //Convert the base64 code into a buffer object,
         fs.writeFile(path, dataBuffer, function(err){//write file with fs
        if(err){
            console.log(err);
        }else{
            console.log('Write successfully!');
        }

    });
})};

