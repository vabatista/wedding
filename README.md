# Wedding Website

This repository was forked from [https://github.com/kaloianm/wedding](https://github.com/kaloianm/wedding). Thanks!

A React.js-based wedding website with registration form and server backed by MongoDB. Uses Webpack to
bundle both the server and client-side dependencies. For now, I'm just using client side. 

I used an API from this repository [https://github.com/ceciliadeveza/gerarqrcodepix](https://github.com/ceciliadeveza/gerarqrcodepix) to generate pix QR code to receive gifts for wedding.

## INSTALLATION

Install node and npm, clone repository and:

```
npm install 
```

## RUNNING LOCALLY

```
npm run install && npm run dev:local

```
You need to create a file `.env.local` with connection string to your MongoDB.

## ENVIRONMENT VARIABLES

* PORT - Port on which the web server should be listening. If not specified, defaults to 8000.
* MONGODB_URI - Uri to use to connect to the MongoDB database. Uses the format ```mongodb://host:port/database```. If not
                specified, defaults to ```mongodb://localhost:27017/wedding```.

## LICENSE

(The MIT License)

Copyright (C) 2016 Kaloian Manassiev

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without
limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons
to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
