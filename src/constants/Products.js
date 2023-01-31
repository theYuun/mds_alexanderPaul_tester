import productData from './productData.json';
import images from '../assets/index_products';

export default function getProduct(origin, prodVal, isHero)
{
    console.log(origin, prodVal, isHero);
    console.log(productData.Products.at(prodVal));

    let collection = {
        category: productData.Products.at(prodVal).category,
        title: productData.Products.at(prodVal).mainStyle,
        subTitle: productData.Products.at(prodVal).subtitle,
        url: productData.Products.at(prodVal).url,
        image: isHero ? images.hero.at(prodVal) : images.products.at(prodVal)
    };

    return collection;
}
