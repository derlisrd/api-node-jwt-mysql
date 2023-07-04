import express from 'express'
import cors from 'cors'
import env from './src/Config/env.js'
import { router } from './src/Routes/index.js'
import { setupSwagger } from './setupSwagger.js'
import authJWT from './src/Middleware/authJWT.js'
import routevalidator from './src/Middleware/routevalidator.js'


const app = express()

app.use(cors({origin:'*'}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

setupSwagger(app);



app.use('/',authJWT,router)

app.use(routevalidator);


const PORT = env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server ready http://localhost:${PORT}/`,PORT);
})

