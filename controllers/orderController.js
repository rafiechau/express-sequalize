    const { User, Product } = require('../models');

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