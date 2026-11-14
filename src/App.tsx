import "./App.css";
import { Button } from "./components/input/button";
import { Text } from "./components/text/text";
import { TextInput } from "./components/input/input-field";
import { SearchBar } from "./components/search-bar/search-bar";

function App() {
  return (
    <>
      <Text type="title">This is the title</Text>
      <Text type="heading">This is the title</Text>
      <Text type="paragraph">This is the title</Text>
      <Text>This is the title</Text>
      <br />

      <Button>Primary Button</Button>
      <Button type="primary">Primary Button</Button>
      <Button type="secondary">Secondary Button</Button>
      <Button type="delete">Delete Button</Button>

      <br />
      <br />
      <TextInput
        type="textarea"
        label="description"
        placeholder="Enter the description for the link"
      />

      <br />
      <br />
      <TextInput
        type="text"
        label="Practice"
        placeholder="Enter practice title"
      />

      <br />
      <br />
      <SearchBar></SearchBar>
    </>
  );
}

export default App;
