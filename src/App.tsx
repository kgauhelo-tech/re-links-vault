import "./App.css";
import { TextInput } from "./components/input/input-field";
import { CreateLink } from "./components/crud-ops/create-link";
import { Sidebar } from "./components/side-bar.tsx/sidebar";
import { useState } from "react";
import { MostRecentItem } from "./components/most-recent/MostRecent";
import { RecentList } from "./components/recent-list/RecentList";
import { dashboard as Dashboard } from "./dashboard/dashboard";

function App() {
  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
}

export default App;
