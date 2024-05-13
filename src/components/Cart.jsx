import { useState } from 'react'
import cart from '../../src/style/Cart.module.css'
import font from '../../src/style/font.module.css'

// 價格每千分位加上,
function numAddComma(num) {
    let str = num.toString()
    let length = str.length
    let start = length % 3 === 0 ? 3 : length % 3
    let result = str.slice(0, start)
    for (let i = start; i < str.length; i+=3) {
        result += "," + str.slice(i, i + 3)
    }

    return result
}

function Item({product, onMinus, onPlus}) {
    let price = product.price
    let id = product.id
    return (
        <>
            <div className={cart.itemCard}>
                <img className={cart.itemImage}
                    src={product.img}
                    alt={product.name}
                />
                <div>
                    <h4 className={`${cart.productName} ${font.noto_sans_400}`}>{product.name}</h4>
                    <div className={cart.quantityPanel}>
                        <button className={cart.minus} onClick={onMinus} data-id={id}><img src="/icons/minus.svg" alt="minus" data-id={id} /></button>
                        <span className={cart.quantityNum}>{product.quantity}</span>
                        <button className={cart.plus} onClick={onPlus} data-id={id}><img src="/icons/plus.svg" alt="plus" data-id={id} /></button>
                    </div>
                    <p className={`${cart.productPrice} ${font.nunito_sans_700}`}>${price > 999 ? numAddComma(price) : price}</p>
                </div>
            </div>
        </>
    )
}

// 運費
function Shipping({ shipping }) {
    let fee = ''
    if (shipping === 0) {
        fee = '免費'
    } else {
        fee = `$${shipping}`
    }
    return (
        <>
            <div className={cart.shipping}>
                <p>運費</p>
                <p className={font.nunito_sans_700}>{fee}</p>
            </div>
        </>
    )
}

// 小計
function Total({items, shipping}) {
    let total = 0
    items.map(item => total += item.price * item.quantity)
    total += shipping
    return (
        <>
            <div className={cart.total}>
                <p>小計</p>
                <p className={font.nunito_sans_700}>${total}</p>
            </div>
        </>
    )
}

export default function Cart({ shipping }) {
    const [data, setData] = useState(
        [
            {
                id: '1',
                name: '貓咪罐罐',
                img: 'https://picsum.photos/300/300?text=1',
                price: 100,
                quantity: 2,
            },
            {
                id: '2',
                name: '貓咪干干',
                img: 'https://picsum.photos/300/300?text=2',
                price: 200,
                quantity: 1,
            },
        ]
    )

    function handleMinus(e) {
        let id = e.target.dataset.id
        let updateData = data.map(item => {
            if (item.id === id && item.quantity > 0) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            } else {
                return item
            }
        })
        setData(updateData)
    }

    function handlePlus(e) {
        let id = e.target.dataset.id
        let updateData = data.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            } else {
                return item
            }
        })
        setData(updateData)
    }

    return (
        <div className={cart.cart}>
            <h3 className={cart.title}>購物籃</h3>
            {data.map(item => 
                <Item product={item} key={item.id} onMinus={handleMinus} onPlus={handlePlus} />
            )}
            <Shipping shipping={shipping} />
            <Total
               items={data}
               shipping={shipping}
            />
        </div>
    )
}