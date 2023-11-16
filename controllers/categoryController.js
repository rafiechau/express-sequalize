const { categorySchema } = require('../helper/validateAtribute');
const { Category } = require('../models');

exports.getCategory = async (req, res) => {
    try{
        const response = await Category.findAll()
        res.status(200).json({ data: response, message: 'Success' })
    }catch(error){
        console.log(error)
        res.status(500).json({ message: 'Terjadi kesalahan dalam menampilkan list category' });
    }
}

exports.addCategory = async (req, res) => {
    try{
        const { title } = req.body;

        const { error } = categorySchema.validate({ title });

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Cek apakah email sudah digunakan
        const existingCategory = await Category.findOne({ where: { title } });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category sudah digunakan' });
        }

        // Buat user baru
        const newCategory = await Category.create({ title });

        res.status(201).json({ message: 'Category berhasil ditambahkan', data: newCategory });
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan category' });
    }
}

exports.updateCategory = async (req, res) => {
    try{
        const categoryId = req.params.id;
        const { title } = req.body;

        const { error } = categorySchema.validate({ title });

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

         // Cari category berdasarkan ID
        const category = await Category.findByPk(categoryId);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

         // Cari category berdasarkan ID
         await category.update({ title });

         // Kembalikan respons sukses
         res.status(200).json({ message: 'Category successfully updated', category });
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan dalam edit category' });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
      const categoryId = req.params.id;
  
      // Cari category yang akan dihapus
      const category = await Category.findByPk(categoryId);
  
      // Jika category tidak ditemukan, kembalikan respons 404
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      // Hapus category
      await category.destroy();
  
      // Kembalikan respons berhasil
      res.status(200).json({ message: 'Category successfully deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
};