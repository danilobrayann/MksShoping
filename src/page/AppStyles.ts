import styled from "styled-components";

export const ListaDeProdutos = styled.ul`
display:flex;
gap:16px;
justify-content:center;
align-items:center;
height: 70vh;
list-style:  none;



`

export const Img = styled.img`
width:200px;
border-radius:50px;

&:hover{
   
}
`

export const Linha = styled.li`
height:400px;
width:200px;
border: solid 3px black;
border-radius:50px;
text-align: center;

`
export const Valor = styled.strong`
color:white;
background-color:black;
border-top-right-radius:10px;
`

export const ButtonCompra = styled.button`
color:white;
font-size:18px;
width:150px;
height:30px;
background-color:#00BFFF;
border-radius:25px;
cursor: pointer;
border:none;
`

export const DivButton = styled.div`
display:flex;
justify-content:center;

`
export const ImgProximo = styled.img`
width:80px;
cursor: pointer;
`