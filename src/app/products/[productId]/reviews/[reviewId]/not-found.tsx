"use client"
import { usePathname } from "next/navigation";
export default function NotFound() {
    const pathname = usePathname();
    const prodcutId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    console.log(pathname);
    return (
        <div>
            <h1>404 - Review {reviewId} for Product {prodcutId} Not Found</h1>
        </div>
    )
}
