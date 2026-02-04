export interface StatsDashboard {
    total_qrs: number;
    total_scans: number;
    by_sede: { nombre: string; qrs_count: number }[];
    by_type: { link: number; others: number };
}
