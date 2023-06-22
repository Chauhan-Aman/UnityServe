const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator')

// Route1: Get all Selling items using: GET "/api/product/fetchallproducts" . Login required
router.get('/fetchallproducts', fetchuser, async (req, res) => {
    try {
        const products = await Product.find({ user: req.user.id })
        res.json(products)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//Route2: Add new product in buy section using: POST "/api/product/addproduct". Login required
router.post('/addproduct', fetchuser, [
    body('Product_Name', 'Enter a valid title').isLength({ min: 3 }),
    body('Description', 'Atmost 200 characters').isLength({ max: 200 }),
    body('Phone', 'Enter a valid Phone Number').isLength({ max: 10 }),
    body('Email', 'Enter a valid email').isEmail()
], async (req, res) => {

    try {
        const { Product_Name, Description, Image, Owner_Name, College, Phone, Email, Instagram, Address, Amount } = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const product = new Product({
            Product_Name, Description, Owner_Name, Image, College, Phone, Email, Instagram, Address, Amount, user: req.user.id
        })
        const SavedProduct = await product.save()
        res.json(SavedProduct)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//Route3: Delete a product in buy section using: DELETE "/api/procuts/deleteproduct". Login required
// (Working)

module.exports = router;