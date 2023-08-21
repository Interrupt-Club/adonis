// var file_system = require('fs');
// var archiver = require('archiver');

// var output = file_system.createWriteStream('dist/target.zip');

// archiver.registerFormat('zip-encrypted', require("archiver-zip-encrypted"));
// let archive = archiver.create('zip-encrypted', {zlib: {level: 8}, encryptionMethod: 'aes256', password: '123'});


// output.on('close', function () {
//     console.log(archive.pointer() + ' total bytes');
//     console.log('archiver has been finalized and the output file descriptor has closed.');
// });

// archive.on('error', function(err){
//     throw err;
// });

// archive.pipe(output);
// archive.directory("adonis", "adonis");
// archive.finalize();

const {spawn} = require("child_process")

var newFile = spawn('zip', [ '-P','123', '-e','./dist/target.zip', './adonis' ])

newFile.stdout.on("data", (data) => {
    console.log(data.toString())
})

newFile.stderr.on("data", (data) => {
    console.error(data.toString())
})