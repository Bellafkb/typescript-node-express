import express, { Application, Response } from 'express'

const port: string = '8080';
const app: Application = express();

app.get('/', (res: Response) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`sever running on port ${port}`)
})