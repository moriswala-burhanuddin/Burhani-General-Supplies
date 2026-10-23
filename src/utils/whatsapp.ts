export const DEALERSHIP_PHONE = '+254 737 235 210';
export const DEALERSHIP_WHATSAPP = '254104480590'; // WhatsApp format: 0104480590 -> 254104480590
export const DEALERSHIP_LOCATION = 'Mtwapa, Kenya (Serving Mombasa, Mtwapa, Kilifi & Ukunda)';

/**
 * Builds a direct, encoded WhatsApp link for vehicle or parts enquiries
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${DEALERSHIP_WHATSAPP}?text=${encoded}`;
}

export function getVehicleEnquiryLink(vehicleName: string, priceText?: string): string {
  const msg = `Hello Burhani General Supplies (KENBO Mtwapa),\n\nI am interested in the *${vehicleName}*${priceText ? ` (${priceText})` : ''} shown on your website catalog.\n\nCould you please confirm current stock availability, purchase options, and financing terms in Mtwapa? Thank you!`;
  return buildWhatsAppLink(msg);
}

export function getFinancingEnquiryLink(vehicleName: string, deposit?: number, months?: number): string {
  const details = deposit && months 
    ? `\nEstimated deposit: KES ${deposit.toLocaleString()} with a ${months}-month tenure plan.` 
    : '';
  const msg = `Hello Burhani General Supplies,\n\nI would like to enquire about financing options for the *${vehicleName}*.${details}\n\nPlease share the requirements and eligibility verification process.`;
  return buildWhatsAppLink(msg);
}

export function getPartEnquiryLink(partName: string, vehicleModel?: string): string {
  const modelInfo = vehicleModel ? ` for my ${vehicleModel}` : '';
  const msg = `Hello Burhani General Supplies,\n\nI am inquiring about the spare part: *${partName}*${modelInfo}.\n\nPlease let me know if it is currently in stock at the Mtwapa shop and confirm the price.`;
  return buildWhatsAppLink(msg);
}

export function formatKes(amount: number | null): string {
  if (amount === null) return 'Request a Quote';
  return `KES ${amount.toLocaleString()}`;
}
