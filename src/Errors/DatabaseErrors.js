

class DatabaseErrors{
    static ConnectionError= ()=>{
        return 'Error de conexión con la base de datos. Revise las credenciales.'
    }
    static ConnectionErrorTimeOut= ()=>{
        return 'La base de datos no pudo conectarse'
    }
}

export default DatabaseErrors