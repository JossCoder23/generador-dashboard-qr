// src/components/layout/SuperAdminDashboard.tsx
import { useEffect, useState } from 'react';
import type { StatsDashboard } from '../../types/dashboard';
import api from '../../api/axios';
import './css/LayoutGlobal.css';
import './css/SuperAdminDashboard.css';

const SuperAdminDashboard = () => {

  const [stats, setStats] = useState<StatsDashboard>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get<StatsDashboard>('/dashboard-stats');
        setStats(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error al cargar estadísticas", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading || !stats) return <div>Cargando panel institucional...</div>;

  return (
    <div className="content-role">
      <section className="content-cards">
        <div className="card-statistics">
          <section>
            <span className="label">Total QR's:</span>
            <button>aca</button>
          </section>
          <h3>{ stats.total_qrs }</h3>
        </div>
        <div className="card-statistics">
          <section>
            <span className="label">Total Escaneos:</span>
            <button>aca</button>
          </section>
          <h3>{ stats.total_scans }</h3>
        </div>
        <div className="card-statistics">
          <section>
            <span className="label">QR's por Sede:</span>
          </section>
          <div className="sede-info">
            {stats.by_sede.map(sede => (
              <div className="sede-info_inner" key={sede.nombre}>
                <small>{sede.nombre}:</small> <span>{sede.qrs_count}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card-statistics">
          <section>
            <span className="label">Tipos:</span>
          </section>
          <div className="type-info">
              <div>
                <small>Link:</small> <span>{stats?.by_type.link}</span>
              </div>
              <div>
                <small>Otros:</small> <span>{stats?.by_type.others}</span>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuperAdminDashboard;