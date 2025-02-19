import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Todos from "./Components/Todo";

function App() {
  return (
    <>
      <Todos />
    </>
  );
}

export default App;
