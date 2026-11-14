import "./App.css";
import { Button } from "./components/input/button";
import { Text } from "./components/text/text";
import { TextInput } from "./components/input/input-field";
import { SearchBar } from "./components/search-bar/search-bar";
import { ItemContainer } from "./components/side-bar.tsx/item-container";
import { Sidebar } from "./components/side-bar.tsx/sidebar";
import { TitleBar } from "./components/title-bar/TitleBar";

function App() {
  return (
    <>
      <TitleBar />
      <br />
      <TextInput
        type="textarea"
        label="description"
        placeholder="Enter the description for the link"
      />

      <br />
      <TextInput
        type="text"
        label="Practice"
        placeholder="Enter practice title"
      />

      <br />
      <Sidebar></Sidebar>
      <br />
    </>
  );
}

export default App;
