import { notFound } from "next/navigation";
import { title } from "process";
type Props = {
    params: {
        productId: string;
        reviewId: string;
    }
}

export const generateMetadata = async ({params}: Props) => {
    const { productId, reviewId } = await params;
    return {
        title: `Review ${reviewId} for Product ${productId}`,
        description: `Review ${reviewId} for Product ${productId}`,
    }
 }

export default async function ProductReview(
    { params} : Props
) {
    const { productId, reviewId } = await params;
    if (parseInt(reviewId) > 1000)
         notFound();

    return (
        <div>
            Review Page for Product ID: {productId} and Review ID: {reviewId}
        </div>
    )
}
