const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;

// adding routes
const itinerariesRoutes = require('./routes/itineraries')
const usersRoutes = require('./routes/users')
const { multerUploads, dataUri } = require('./middleware/multer')
const { cloudinaryConfig, uploader } = require('./config/cloudinaryConfig')

// using cors and json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use(express.static('public'))

// basic routing
app.use('/itineraries', itinerariesRoutes)
app.use('/users', usersRoutes)

// posting image
app.use('*', cloudinaryConfig);
app.get('/*', (req, res) => res.sendFile(resolve(__dirname, '../public/index.html')));
app.post('/upload', multerUploads, (req, res) => {
    if (req.file) {
        const file = dataUri(req).content;
        return uploader.upload(file).then((result) => {
            const image = result.url;
            return res.status(200).json({
                messge: 'Your image has been uploded successfully to cloudinary',
                data: {
                    image
                }
            })
        }).catch((err) => res.status(400).json({
            messge: 'someting went wrong while processing your request',
            data: {
                err
            }
        }))
    }
});

// listening
app.listen(PORT || 8000, () => {
    console.log("are YOU listening?");
});
