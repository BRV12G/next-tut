export default function ProductDetailsLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <h1>Product Details</h1>
            {children}
        </>
    )
}
