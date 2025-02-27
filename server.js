const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rideRoutes = require('./routes/rides');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/rides', rideRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://easwarasdf:gCNp25WwMyxrDj3F@cluster0.esqxqyt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
