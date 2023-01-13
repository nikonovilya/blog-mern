import Post from '../model/Post.js';

export const getAll = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', '-passwordHash').exec();

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    Post.findByIdAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: 'after',
      },
      (error, post) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }
        if (!post) {
          return res.status(404).json({ message: 'Статья не найдена' });
        }
        res.json(post);
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { title, content, tags, imageUrl } = req.body;
    const post = new Post({
      title,
      content,
      tags,
      imageUrl,
      author: req.userId,
    });
    const newPost = await post.save();

    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    Post.findByIdAndRemove(
      {
        _id: postId,
      },
      (error, post) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }
        if (!post) {
          return res.status(404).json({ message: 'Статья не найдена' });
        }
        res.json({ message: 'Статья удалена' });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content, tags, imageUrl } = req.body;

    await Post.updateOne(
      {
        _id: postId,
      },
      {
        title,
        content,
        tags,
        imageUrl,
        author: req.userId,
      }
    );
    res.json({ message: 'Статья обновлена' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
