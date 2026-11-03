
import { Suspense } from "react";
import ProductDetailContent from "./ProductDetailContent";

export default function ProductDetail() {
    return (
        <Suspense fallback={<h1>Loading product...</h1>}>
            <ProductDetailContent />
        </Suspense>
    );
}
