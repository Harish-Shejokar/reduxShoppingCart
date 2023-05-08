import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const dummy_data = [
    {
      id : "h1",
      title: "My first Book",
      price: 10,
      description:"First book i ever Wrote"
    },
    {
      id : "h2",
      title: "My second Book",
      price: 12,
      description:"Second book i ever Wrote"
    },
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_data.map((product) => {
          return (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
