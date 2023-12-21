const express = require(`express`)
const app = express();

app.use(express.json())

let productos = [
    { id: 1, nombre: "Producto 1", precio: 19.99 },
    { id: 2, nombre: "Producto 2", precio: 19.99 },
    { id: 3, nombre: "Producto 3", precio: 5.99 },
]


app.get(`/productos`,(req, res) =>{
    res.json(productos);
})

app.get("/productos/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const producto = productos.find((p) => p.id === id);
    
    if(!producto){
        res.status(404).json({error:"Producto no encontrado"});
    } else {
        res.json(producto);
    }
})


const port = 3000;

app.listen(port, () =>{
    console.log(`Seridor Express.js en funcionamiento en el puerto ${port}`);
    console.log(`El servidor se aloja en: http://localhost:${port}/`);
});