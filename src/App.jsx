import axios from "axios"
import Header from "./Header/Header"
import { Card } from "./Card/Card"
import { useEffect, useState } from "react"

function App() {
  const [products,setProducts]=useState([])
  const [categories,setCategories]=useState([])
    const [selectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        console.log(response.data)
        setProducts(response.data.slice(0,-5)) //remove last product because has no image and no title
      })
  }, [])

  
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/categories')
      .then((response) => {
        console.log(response.data)
        setCategories(response.data)
      })
  }, [])

// let filteredProducts;
// if(selectedCategory==="")
//   {
// filteredProducts=products;
// }
// else{
//   filteredProducts=products.filter((p)=>{
//   return p.category.id == selectedCategory
// })
  
}
 const filteredProducts = selectedCategory
  ? products.filter(p => p.category.id == selectedCategory)
  : products;

  function test(e){
    setSelectedCategory(e.target.value)
  }
  
  const productsArray=filteredProducts.map((product)=>{
        return <Card key={product.id} img={product.images[0]} title={product.title} price={product.price} category={product.category.name}/>
      })

  return (
    <>
      <Header />
      <section style={{textAlign:"center",padding:"20px",fontSize:"20px"}}>
        search products by &nbsp;&nbsp; 
        <select name="" id="" onChange={test} value={selectedCategory}>
          <option value="">-- Select Category --</option>
    {
      categories.map((cat)=>{
        return <option key={cat.id} value={cat.id}>{cat.name}</option>
      })
    }

        </select>
      </section>
      <section>
        <h1>all products</h1>
      <div className="container">
        {productsArray}
      </div>
      </section>
     {
      
     }
    </>
  )
}

export default App
