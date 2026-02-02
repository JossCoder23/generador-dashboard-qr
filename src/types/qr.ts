export interface QR {
  id: number;
  type: 'link' | 'social' | 'vcard' | 'pdf' | string;
  title: string;
  slug: string;
  qr_image_url: string; // La URL que generamos con asset()
  short_url: string;    // El link de redirección /q/{slug}
  redirect_url?: string;
  scans_count?: number; // Lo que obtendremos con withCount('scans')
  status: number;
  created_at: string;
}

export interface QRScan {
  id: number;
  ip_address: string;
  browser: string;
  device_type: string;
  country: string;
  scanned_at: string;
}