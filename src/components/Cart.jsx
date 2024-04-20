import cart from '../../src/style/Cart.module.css'
import font from '../../src/style/font.module.css'

const data = [
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

function QuantityPanel({ quantity }) {
    return (
        <div className={cart.quantityPanel}>
            <button className={cart.minus}><img src="/icons/minus.svg" alt="minus" /></button>
            <span className={cart.quantityNum}>{quantity}</span>
            <button className={cart.plus}><img src="/icons/plus.svg" alt="plus" /></button>
        </div>

    )
}

function Item(product) {
    let price = product.price * product.quantity
    return (
        <>
            <div className={cart.itemCard}>
                <img className={cart.itemImage}
                    src={product.img}
                    alt={product.name}
                />
                <div>
                    <h4 className={`${cart.productName} ${font.noto_sans_400}`}>{product.name}</h4>
                    <QuantityPanel 
                        quantity={product.quantity}
                    />
                    <p className={`${cart.productPrice} ${font.nunito_sans_700}`}>${price > 999 ? numAddComma(price) : price}</p>
                </div>
            </div>
        </>
    )
}

// 運費
function Shipping() {
    return (
        <>
            <div className={cart.shipping}>
                <p>運費</p>
                <p className={font.nunito_sans_700}>免費</p>
            </div>
        </>
    )
}

// 小計
function Total({items}) {
    let total = 0
    items.map(item => total += item.price * item.quantity)
    return (
        <>
            <div className={cart.total}>
                <p>小計</p>
                <p className={font.nunito_sans_700}>${total}</p>
            </div>
        </>
    )
}

export default function Cart() {
    return (
        <div className={cart.cart}>
            <h3 className={cart.title}>購物籃</h3>
            {data.map(item => 
                <Item {...item} key={item.id} />
            )}
            <Shipping />
            <Total
               items={data} 
            />
        </div>
    )
}