import express from 'express'
import cors from 'cors'
import env from './src/Config/env.js'
import { router } from './src/Routes/index.js'
import { setupSwagger } from './setupSwagger.js'
import authJWT from './src/Middleware/authJWT.js'
import routevalidator from './src/Middleware/routevalidator.js'


const app = express()
const corsOptions = {
    origin: ['https://ruizdiaz.dev', 'https://www.ruizdiaz.dev'], // Aquí añade los dominios permitidos
    methods: ['GET', 'POST','DELETE','PUT'], // Métodos HTTP permitidos
  };
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended:false}))

setupSwagger(app);



app.use('/',authJWT,router)

app.use(routevalidator);


const PORT = env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server ready http://localhost:${PORT}/`,PORT);
})

