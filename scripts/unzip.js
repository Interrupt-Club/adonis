const {spawn} = require("child_process")

var newFile = spawn('unzip', [ '-P','123', '-d','./dist','./dist/target.zip' ])

newFile.stdout.on("data", (data) => {
    console.log(data.toString())
})

newFile.stderr.on("data", (data) => {
    console.error(data.toString())
})