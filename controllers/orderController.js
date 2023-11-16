const { User, Product, Order } = require('../models');
const { orderSchema } = require('../helper/validateAtribute');

exports.getOrders = async(req, res) => {
    try{
        const response = await User.findAll({
            include: Product
        });
    // console.log(response)
        res.status(200).json({ data: response, message: 'Success' })
    }catch(error){
        console.error(error);
        return res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
}

exports.addOrder = async (req, res) => {
    try {
      const { userId, productId, orderDate, status, quantity } = req.body;
      

      const { error } = orderSchema.validate({ userId, productId, orderDate, status, quantity });

      if (error) {
          return res.status(400).json({ message: error.details[0].message });
      }
  
      // Cari user yang akan membuat pesanan berdasarkan userId
      const user = await User.findByPk(userId);

  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Cari produk yang akan dipesan berdasarkan productId
      const product = await Product.findByPk(productId);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      const price = quantity * product.harga;
  
      // Buat pesanan baru
      await Order.create({
        userId,
        productId,
        orderDate,
        status,
        quantity,
        price
      });

      const response = await User.findAll({
        include: Product
    });
  
      // Kembalikan respons berhasil
      res.status(201).json({ message: 'Order berhasil ditambahkan', data: response });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
  };