import MainTile from "./components/MainTile/MainTile";
import Tiles from "./components/Tiles/Tiles";
import { PORTFOLIO_PROJECTS } from "@/app/constants/projects";

const Home: React.FC = () => {
  return (
    <main>
      <MainTile />
      <Tiles projects={PORTFOLIO_PROJECTS} />
    </main>
  );
};

export default Home;
