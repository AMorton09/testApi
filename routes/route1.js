const express = require('express');
// Import index action from movies controller


// Initialize the router
const router = express.Router();

// Handle /movies.json route with index action from movies controller
router.get('/', (req, res) => {
    res.send("works");
    });

router.post('/testPost',(req,res) =>{
   console.log("it hit me");
   console.log(req.body);
   res.send('it hit');
});

router.get('/addBand', (req, res) => {

    res.send("works");
});

exports = module.exports = router;