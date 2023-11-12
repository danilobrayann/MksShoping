import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Header from "./components/Header";
import { ListaDeProdutos, Img, Linha, Valor, ButtonCompra, DivButton, ImgProximo } from "./page/AppStyles";
import proximo from '../assets/proximo.png'
import anterior from '../assets/anterior.png'
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  photo: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<{ count: number; products: Product[] }> =
          await axios.get(
            `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=id&orderBy=DESC`
          );
        console.log("testando ", response);
        setProducts(response.data.products);
      } catch (error) {
        console.error("erro ao buscar os produtos", error);
      }
    };
    fetchData();
  }, [page, rows]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleLoadBeck = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <Header/>
    
      <ListaDeProdutos>
      <ImgProximo onClick={handleLoadBeck} src={anterior } >{ }</ImgProximo>
        {products.map((product) => (
          <Linha key={product._id}>
             <Valor>R${product.price}</Valor>
            <Img src={product.photo} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description.slice(0,40)}</p>
           <DivButton>
            <ButtonCompra>Comprar</ButtonCompra>
           </DivButton>
          </Linha>
        ))}
         <ImgProximo onClick={handleLoadMore} src={proximo } >{ }</ImgProximo>
      </ListaDeProdutos>
     
    </div>
  );
}

export default App;
