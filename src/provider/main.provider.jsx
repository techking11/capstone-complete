import { UserProvider } from "../context/user.context";
import { ProductsProvider } from "../context/product.context";
import { CartProvider } from "../context/cart.context";

const MainProvider = ({ children }) => (
  <UserProvider>
    <ProductsProvider>
      <CartProvider> {children} </CartProvider>
    </ProductsProvider>
  </UserProvider>
)

export default MainProvider;