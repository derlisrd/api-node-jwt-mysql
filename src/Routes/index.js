import { Router } from "express";
import { readdirSync } from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const PATH_ROUTE = __dirname

const router = Router()

const cleanFileName = (filename)=>{
    const file = filename.split('.').shift()
    return file
}
readdirSync(PATH_ROUTE).filter((filename)=>{
    const cleanName = cleanFileName(filename)
    if(cleanName !== 'index'){
        import(`./${filename}`).then((moduloRouter)=>{
            router.use(`/${cleanName}`, moduloRouter.default);
        })
    }
})

export {router}
