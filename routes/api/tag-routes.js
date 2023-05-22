const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll(({
      include: [
        { model: Product, through: ProductTag, as: 'products_with_tag' }
      ]
    }));
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        { model: Product, through: ProductTag, as: 'products_with_tag' }
      ]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body, {
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value

  try {
    const updatedTag = await Tag.update(
      {
        tag_name: req.body.tag_name,
        products_with_tag: req.body.products_with_tag
      },
      {
        where: {
          id: req.params.id,
        },
      })
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
