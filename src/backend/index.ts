import { Server } from 'azle';
import express, { Request, Response } from 'express';
import System.IO.ports;


export default Server (()=>{

    var app=express();
    app.use(express.json());
    var portName='COM6';
    var baudRate=9600;
    
    var serialPort= new SerialPort(portName, baudRate);
    serialPort.open();
    console.writeLine("Escuchando");
    app.Post("/datos", async (req, res) =>
    {
    string data = serialPort.ReadLine();
    res.Send("Datos recibidos: " + data);});

app.Get("/datos", async (req, res) =>
{
    string data = serialPort.ReadLine();
    res.Send("Datos recibidos: " + data);
});

app.Delete("/datos", async (req, res) =>
{
    res.Send("Datos eliminados");
});

// Definir la ruta para manejar la solicitud PUT
app.Put("/datos", async (req, res) =>
{
    // Realizar acciones para actualizar datos si es necesario
    res.Send("Datos actualizados");
});

// Escuchar en el puerto 3000
app.Listen(3000, () =>
{
    Console.WriteLine("Servidor iniciado en el puerto 3000");
});
return app.listen();

});