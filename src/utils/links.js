import { company } from "../data/company.js";

const missingValues = new Set([""]);

export const isMissingValue = (value) => !value || missingValues.has(String(value).trim());

export const formatAddress = () =>
  `${company.address.street}, ${company.address.postalCode} ${company.address.city} (${company.address.province})`;

export const displayValue = (value) => (isMissingValue(value) ? "" : value);

export const normalizePhone = (value, { whatsapp = false } = {}) => {
  if (isMissingValue(value)) {
    return null;
  }

  const trimmed = String(value).trim();
  const digits = trimmed.replace(/[^\d+]/g, "");
  if (!digits) {
    return null;
  }

  if (whatsapp) {
    const onlyDigits = digits.replace(/\D/g, "");
    if (!onlyDigits) {
      return null;
    }

    if (onlyDigits.startsWith("39")) {
      return onlyDigits;
    }

    if (onlyDigits.startsWith("00")) {
      return onlyDigits.slice(2);
    }

    return `39${onlyDigits}`;
  }

  if (digits.startsWith("+")) {
    return digits;
  }

  if (digits.startsWith("00")) {
    return `+${digits.slice(2)}`;
  }

  return `+39${digits.replace(/\D/g, "")}`;
};

export const getPhoneHref = () => {
  const phone = normalizePhone(company.phone);
  return phone ? `tel:${phone}` : null;
};

export const getWhatsAppHref = () => {
  const whatsapp = normalizePhone(company.whatsapp, { whatsapp: true });
  if (!whatsapp) {
    return null;
  }

  return company.whatsappMessage
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`
    : `https://wa.me/${whatsapp}`;
};

export const getEmailHref = () => {
  if (isMissingValue(company.email)) {
    return null;
  }

  return `mailto:${company.email}`;
};

export const getMapsHref = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`;

export const getFallbackContactHref = () => "#contatti";
