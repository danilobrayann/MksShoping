import { DivCarrinho, DivText, HeaderNav } from "./styles";



export default function Header() {
    return(
        <>
         <HeaderNav>
        <DivText>
          <h1>MKS</h1>
          <p>Sistemas</p>
        </DivText>
        <DivCarrinho>
          <img src='' alt="Carrinho" />
        </DivCarrinho>
      </HeaderNav>
        </>
    )
}