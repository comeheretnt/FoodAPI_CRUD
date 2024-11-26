exports.showCategories = async (req, res) => {
    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch('http://localhost:4001/api/foods');
        const foods = await response.json();
        res.render('index', { foods });
    } catch(error) {
        console.error("Error fetching categories:", error);
        res.status(500).send("Server Error");
    }
}