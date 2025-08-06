export default function({oldPrice,newPrice}){
    let oldstyles={
        textDecorationLine:"line-through",
    };
    let newStyle={
        fontWeight:"bold",
    };
    let styles={
        backgroundColor:"#e0c367",
        height:"30px",
        borderBottomLeftRadius:"14px",
         borderBottomRightRadius:"14px"
    }
    return(
        <div style={styles}>
            <span style={oldstyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    );
}