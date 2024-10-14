const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');  // Import the auth routes
const employeeRoutes = require('./routes/employees');

const app = express();
const PORT = process.env.PORT || 3004;

// Middleware to parse JSON data
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://ahmedgabeyre:Newpass2023@cluster0.ocywm.mongodb.net/comp3123_assignment1', {
    // options removed as they are deprecated
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Could not connect to MongoDB...', err);
});

// Use the auth routes
app.use('/api/v1/user', authRoutes);

// Use the employee routes
app.use('/api/v1/emp', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
