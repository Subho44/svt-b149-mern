import React from 'react'

const Home = () => {
    const products = [
        { id: 1, name: 'laptop', price: 67000 },
        { id: 2, name: 'watch', price: 6700 },
        { id: 3, name: 'iphone', price: 670000 },

    ];
    return <>
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
            </tr>
            {
                products.map(x => (
                    <tr>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.price}</td>
                    </tr>
                ))
            }
        </table>
    </>
}

export default Home