export type CompanyLegal = {
  name: string; shortName?: string;
  address: string; zip: string; city: string; country: string;
  website: string; email: string; supportEmail: string; dpoEmail?: string;
  jurisdiction: string; regNumber?: string; vatNumber?: string;
  copyrightAgentEmail?: string;
};
export const COMPANY: CompanyLegal = {
  name: "Cine Channel S.L.",
  shortName: "Cine Channel",
  address: "Calle de Ejemplo 123",
  zip: "28001",
  city: "Madrid",
  country: "España",
  website: "https://www.cine-channel.com",
  email: "info@cine-channel.com",
  supportEmail: "support@cine-channel.com",
  dpoEmail: "privacy@cine-channel.com",
  jurisdiction: "España (UE)",
  regNumber: "TOMO 0000, FOLIO 00, HOJA M-000000",
  vatNumber: "ESB00000000",
  copyrightAgentEmail: "copyright@cine-channel.com",
};
