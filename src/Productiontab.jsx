import Product from './Product.jsx'
function Productiontab(){
    let styles={
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      alignItems:"center"
    }
    return (
      
        <div style={styles}>
    <Product title={"Logictech mX Master"} idx={0}/>
    <Product title={"Apple pencil(2nd Gen)"} idx={1}/>
    <Product title={"Zebronics zeb-transformer"} idx={2}/>
    <Product title={"Petronics toad 23"} idx={3}/>
    </div>
    );
}

export  default Productiontab;