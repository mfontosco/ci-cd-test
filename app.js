const express = require('express');
const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

// Middleware to log request details

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${JSON.stringify(req.body)}`);
  next();
});
    const PORT = process.env.PORT || 8080

    app.get('/products', (req, res) => {
        // Simulate a delay to simulate network latency
        setTimeout(() => {
            res.json([
                { id: 1, name: 'Product 1', price: 10.99 },
                { id: 2, name: 'Product 2', price: 15.99 },
                { id: 3, name: 'Product 3', price: 20.99 },
            ]);
        }, 2000);
    });
    app.listen(PORT, function() {
        console.log(`Server is running on port ${PORT}`);
    });