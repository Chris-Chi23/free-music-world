const mongoose = require('mongoose'),
      uri = 'mongodb://localhost:27017/free-music-world',
      models = {
          User: {
              userName:{
                  type:String,
                  require:true
              },
              password:{
                  type:String,
                  require:true
              },
              email:{
                  type:String,
                  required:true
              }
          }
      }
mongoose.connect(uri)
for(let modelKey in models){
    models[modelKey] = mongoose.model(modelKey, new mongoose.Schema(models[modelKey]))
}
module.exports = modelKey => (
    models[modelKey]
)

