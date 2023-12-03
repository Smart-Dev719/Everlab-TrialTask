import { Welcome } from '../components/Welcome/Welcome';
import { ChartCard } from '../components/ChartCard/ChartCard';
import ControlPanel from '@/components/ControlPanel/ControlPanel';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ChartCard />
      <ControlPanel />
    </>
  );
}
