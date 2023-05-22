const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // Doesn't send response until all categories are found
  try {
    const categoryData = await Category.findAll({
      include: [
        // Products with an 's' makes this work versus without 's'
        { model: Product, as: 'products' }
      ]
    });
    // Sends categoryData back to user
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get one category
router.get('/:id', async (req, res) => {
  // Finds a single product using `id`
  try {
    // Doesn't send response until category is found
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        { model: Product, as: 'products' }
      ]
    });
    // Sends categoryData back to user
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to create a new category
router.post('/', async (req, res) => {
  // Creates a new category then returns it to the user
  try {
    const newCategory = await Category.create(req.body, {
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to update category
router.put('/:id', async (req, res) => {
  // Updates a category by its `id` value; updates category before returning it to the user
  try {
    const updatedCategory = await Category.update(
      {
        category_name: req.body.category_name,
        products: req.body.products
      },
      {
        where: {
          id: req.params.id,
        },
      })
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to delete a category by its id
router.delete('/:id', async (req, res) => {
  try {
    // Waits for category to be destroyed before returning if it was successful or not
    const deletedCategory = await Category.destroy(
      {
        where: {
          id: req.params.id,
        },
      })
    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
