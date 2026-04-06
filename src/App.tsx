import Header from "./components/Header";
import EventPage from "./pages/EventPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <div className="mx-auto flex max-w-360 flex-col gap-6 px-6 lg:px-12 xl:px-25 font-space-grotesk">
      <Header />
      <EventPage />
      <FormPage />
    </div>
  );
}

export default App;
