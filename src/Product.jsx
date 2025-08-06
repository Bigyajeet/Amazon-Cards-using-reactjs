import './Product.css'
import Price from './Price';
function Product({title,idx}){
  let oldPrices=["12,495","11,900","1,599","599"];
  let newPrices=["8999","9,199",'899','278'];
  let Description=[
    ["8,000 DPI","5 programmable buttons"],
    ["initutive surface","designed for ipad pro"],
    ["designed for ipad pro","institutive surface"],
    ["wireless","optical orientation"],
  ];

    return <div className='Product'>
    
<h4>{title}</h4>
<p>{Description [idx][0]}</p>
<p>{Description [idx][1]}</p>
<p><Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/></p>

    </div>
}

export default Product;