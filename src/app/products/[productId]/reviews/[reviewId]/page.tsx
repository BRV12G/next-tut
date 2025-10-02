export default async function ProductReview(
    { params} : { params: Promise<{ productId:string, reviewId: string}>}
) {
    const { productId, reviewId } = await params;

    return (
        <div>
            Review Page for Product ID: {productId} and Review ID: {reviewId}
        </div>  
    )
}
