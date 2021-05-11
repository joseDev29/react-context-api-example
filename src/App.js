import { ButtonChangeData } from "./components/ButtonChangeData";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <DataProvider>
      <div className="container">
        <Page1 />
        <Page2 />
        <ButtonChangeData />
      </div>
    </DataProvider>
  );
};

export default App;
