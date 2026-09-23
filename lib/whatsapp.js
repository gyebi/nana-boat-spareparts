const defaultNumber = "233532887036";

export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || defaultNumber;

export function getWhatsAppLink(message = "Hello Nana Boateng Auto Parts. I need help finding a part.") {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppLink(product, productUrl = "") {
  return getWhatsAppLink(`Hello Nana Boateng Auto Parts. I am interested in:\n${product.name}\nReference: ${product.sku}\nPrice shown: GHS ${product.priceGhs.toFixed(2)}${productUrl ? `\nPage: ${productUrl}` : ""}\n\nMy vehicle year/model is: ______\nPlease confirm fitment and availability.`);
}
