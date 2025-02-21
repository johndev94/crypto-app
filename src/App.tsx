import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Todos from "./Components/Todo";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Projects />
      {/* <Todos /> */}
    </>
  );
}

export default App;
