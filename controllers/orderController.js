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
      // console.log(product.harga)
      // return
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      const totalPrice = quantity * product.harga;

  
      // Buat pesanan baru
      await Order.create({
        userId,
        productId,
        orderDate,
        status,
        quantity,
        totalPrice
      });

      const response = await User.findAll({
        where: {
          id: userId 
        },
        include: Product
    });
  
      // Kembalikan respons berhasil
      res.status(201).json({ message: 'Order berhasil ditambahkan', data: response });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
};

exports.deleteOrder = async (req, res) => {
  try{
    const orderId = req.params.orderId; // atau sesuaikan dengan nama parameter di route Anda
    const userId = req.params.userId; // asumsikan Anda juga menerima userId sebagai parameter

    // Cari order berdasarkan orderId dan userId
    const order = await Order.findOne({
      where: {
        id: orderId,  // Pastikan bahwa ini adalah nama kolom untuk order ID di tabel Orders
        userId: userId // Pastikan bahwa ini adalah nama kolom untuk user ID di tabel Orders
      }
    });

    // Jika order tidak ditemukan, kembalikan respons 404
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Hapus order
    await order.destroy();

     // Kembalikan respons berhasil
     res.status(200).json({ message: 'Order successfully deleted' });

  }catch(error){
    console.log(error)
    res.status(500).json({ message: 'Internal server error' });
  }
}


