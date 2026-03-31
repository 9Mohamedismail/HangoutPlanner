import Header from "./components/Header";
import Card from "./components/Card";
import InfoCard from "./components/InfoCard";
import CardTwo from "./components/CardTwo";

function App() {
  return (
    <div className="mx-auto flex max-w-360 flex-col gap-10 px-6 lg:px-12 xl:px-25 font-space-grotesk">
      <Header />
      <InfoCard />
      <Card />
      <CardTwo />
    </div>
  );
}

export default App;
