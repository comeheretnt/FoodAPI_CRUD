const { get } = require("mongoose");
const foodModel = require("../models/food.model");

const foodController = {
    // Tạo món ăn mới
    createFood: async (req, res) => {
        const body = req.body;
        try {
            const newFood = await foodModel.create(body);
            res.status(200).json(newFood);
        } catch (error) {
            console.error('Error creating food:', error); // Log the error
            res.status(500).send('Error creating food');
        }
    },

    // Lấy danh sách tất cả món ăn
    getFoods: async (req, res) => {
        try {
            const foods = await foodModel.find();
            res.status(200).json(foods);
        } catch (error) {
            res.status(500).send('Error fetching foods');
        }
    },
    // Cập nhật thông tin món ăn
    updateFood: async (req, res) => {
        const id = req.params.id;
        try {
            const updatedFood = await foodModel.findByIdAndUpdate(id, { new: true });
            res.status(200).json(updatedFood);
        } catch (error) {
            res.status(500).send('Error updating food');
        }
    },

    // Xóa món ăn
    deleteFood: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedFood = await foodModel.findByIdAndDelete(id);
            res.status(200).json(deletedFood);
        } catch (error) {
            res.status(500).send('Error deleting food');
        }
    }
};

module.exports = foodController;