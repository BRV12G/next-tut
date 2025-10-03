import Link from "next/link";

export default function ProductList() {
    const productId = 100;
    return (
        <>
        <h1>Product List</h1>
        <Link href="/">Home</Link>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
        </>
    )
}
