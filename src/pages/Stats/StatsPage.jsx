import ClickChart from '../../components/displays/ClickChart';
import UrlTable from '../../components/displays/UrlTable';

export default function StatsPage() {
  return (
    <div className="stats-page">
      <h1>📊 Your Link Analytics</h1>
      <ClickChart />
      <UrlTable />
    </div>
  );
}
