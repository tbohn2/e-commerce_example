const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // Doesn't send response until all tags are found
  try {
    const tagData = await Tag.findAll(({
      include: [
        { model: Product, through: ProductTag, as: 'products_with_tag' }
      ]
    }));
    // Sends tagData back to user
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get one tag
router.get('/:id', async (req, res) => {
  // Finds a single product using `id`
  try {
    // Doesn't send response until tag is found
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        { model: Product, through: ProductTag, as: 'products_with_tag' }
      ]
    });
    // Sends tagData back to user
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to create a new tag
router.post('/', async (req, res) => {
  try {
    // Creates a new tag before returning it to the user
    const newTag = await Tag.create(req.body, {
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to update a tag by id
router.put('/:id', async (req, res) => {
  try {
    // Updates a tag's name by its `id` value before returning whether it was successful or not
    const updatedTag = await Tag.update(
      // Recieves tag_name and products_with_tag
      {
        tag_name: req.body.tag_name,
        products_with_tag: req.body.products_with_tag
      },
      // Updates where id is specified
      {
        where: {
          id: req.params.id,
        },
      })
    // Sends back updatedTag result
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }

});

// Route to delete a tag by its id
router.delete('/:id', async (req, res) => {
  try {
    // Waits to delete tag by id before return whether it was successful or not
    const deletedTag = await Tag.destroy(
      {
        where: {
          id: req.params.id,
        },
      })
    //Returns deletedTag result to user
    res.status(200).json(deletedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
