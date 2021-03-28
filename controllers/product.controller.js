const Product=require('../models/product.model')
exports.test=function(req,res){
    res.send('Greetings from the Test Controller')
}

exports.product_create=(req,res)=>{
    let product=new Product({
       name:req.body.name,
       price:req.body.price
    })

product.save((err)=>{
if(err){
    return next(err)
}
res.send('Product is created')
})
}
exports.product_details =(req, res)=> {
    Product.findById(req.params.id, (err, product)=> {
    if (err) return next(err)
    res.send(product)
                })
            }

exports.product_update = (req, res)=> {
 Product.findByIdAndUpdate(req.params.id, {$set: req.body},  (err, product)=> {
                        if (err) return next(err)
                        res.send('Product is udpated.')
                    })
                }

exports.product_delete = (req, res)=> {
                        Product.findByIdAndRemove(req.params.id, function (err) {
                            if (err) return next(err)
                            res.send('Deleted  successfully.')
                        })
                    }


        
