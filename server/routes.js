const fs = require('fs');
const http = require('http');

module.exports = function(app){

    // GET - Returns the image list
    app.get("/imagelist", (req,res) => {
        let files = fs.readdirSync('./public/images');
        res.status(200).send(files);
    });

    //GET - Download Image
    app.get("/downloadimage/:imageName", (req,res) => {
        const imageName = req.params.imageName;
        const file = `./public/images/${imageName}`;
        res.download(file);
    });

    // POST - Adding or Updating the Images
    app.post("/updateImage", (req,res) => {
        const blobLink = req.body.blob.slice(27, 35);
        const path = './public/images/excalidraw_' + blobLink + '.png';
        
        const canvas = req.body.canvas;
        const base64 = canvas.replace(/^data:image\/\w+;base64,/, "");  //Remove the front part of the image base64 code data:image/png;base64
        const dataBuffer = new Buffer.from(base64,'base64'); //Convert the base64 code into a buffer object,

        fs.writeFile(path, dataBuffer, function(err){
            if(err){
                res.send("Image update failed!")
            }else{
                res.send("Image successfully added!")
            }
        });
}

)};

