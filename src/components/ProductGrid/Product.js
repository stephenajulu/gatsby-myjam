import React, { useContext, useState } from "react"
import { Item, PlusIcon, QuantityBoxMobile, CartIcon, QtyMinus, QtyPlus } from "./Components"
import AppContext from "../../store/context"

const Product = React.memo(({ js, item }) => {
  const [ quantity, setQuantity ] = useState(1)
  const { state } = useContext(AppContext)

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleQuantityIncrement = () => {
    const newQty = Number.parseInt(quantity) + 1
    setQuantity(newQty)
  }

  const handleQuantityDecrement = () => {
    const newQty = Number.parseInt(quantity) - 1
    if(newQty > 0) {
      setQuantity(newQty)
    }
  }

  const handleRestQty = () => {
    setTimeout(() => setQuantity(1), 500)
  }

  return (
    <>
      {js && (
        <Item
          data-id={item.recordId}
          data-price={!!item.data[state.priceCode] ? item.data[state.priceCode] : item.data.price}
          data-name={item.data.name}
          data-sku={item.data.sku}
          data-unit-type={item.data.unitType}
          data-description={item.data.description}
          data-url={!!item.data[state.priceCode] ? `https://myjam.store/store/${state.priceCode}/products` : `https://myjam.store/products`}
          data-meta={JSON.stringify({
            shop:state.store,
            unitType: item.data.unitType,
            sku: item.data.sku,
            inStore: !!item.data[state.priceCode]
          })}
        >
          <img
            src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUDINARY_KEY}/image/upload/${process.env.GATSBY_CLOUDINARY_PATH}/my-jam/${item.data.sku}.jpg`}
            alt={item.data.name}
          />
          <h3 className="price">
            <span>&#163;{!!item.data[state.priceCode] ? item.data[state.priceCode] : item.data.price}</span>
            <PlusIcon />
          </h3>
          <span className="name">{item.data.name.split(' ').map( word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}</span>
          <QuantityBoxMobile>
            <span>Quantity: ({item.data.unitType})</span>
            <div>
              <input type="number" value={quantity} onChange={handleQuantityChange} />
              <QtyPlus onClick={handleQuantityIncrement} />
              <QtyMinus onClick={handleQuantityDecrement} />
            </div>
            <div>
              <button
                onClick={handleRestQty}
                className="snipcart-add-item"
                data-item-id={item.recordId}
                data-item-name={item.data.name}
                data-item-price={!!item.data[state.priceCode] ? item.data[state.priceCode] : item.data.price}
                data-item-quantity={quantity}
                data-item-url={!!item.data[state.priceCode] ? `https://myjam.store/store/${state.priceCode}/products` : `https://myjam.store/products`}
                data-item-metadata={JSON.stringify({
                  shop:state.store,
                  unitType: item.data.unitType,
                  sku: item.data.sku,
                  inStore: !!item.data[state.priceCode]
                })}
              >
                <CartIcon/>
                <span>
                  Add To Cart
                </span>
              </button>
            </div>
          </QuantityBoxMobile>
        </Item>
      )}
    </>
  )
})
export default Product