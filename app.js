const express = require(`express`)
const app = express();


app.get(`/`, (req,res) =>{
    res.send(`¡Hola Mundo!`)
})
app.get("/productos", (req,res) =>{
    const categoria = req.query.categoria;
    res.send(`Realizar búsqueda de productos en la categoria "${categoria}"`)
})
app.get (`/productos/:id`, (req,res) =>{
    const prodcutoID = req.params.id;
    res.send(`informacion del producto con ID ${prodcutoID}`);
})


app.post (`/productos`, (req,res) =>{
    res.send("Producto creado satisfactoriamente.")
});
app.put (`/productos`, (req,res) =>{
    res.send("Producto modificado satisfactoriamente.")
});

const port = 3000;

app.listen(port, () =>{
    console.log(`Seridor Express.js en funcionamiento en el puerto ${port}`);
    console.log(`El servidor se aloja en: http://localhost:${port}/`);
});