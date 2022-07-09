import React, { useState, Suspense, useEffect } from "react";
import "./App.css";
import styled from "@emotion/styled";
import fetchData from "./fetchData";
import Loader from "./components/Loader";
import { Box } from "@chakra-ui/react";

const Landing = React.lazy(() => import("./components/Landing"));

const githubApi = "https://api.github.com/users/danielkoh99/repos";

const myToken = `${import.meta.env.VITE_GITHUB_PRIVATE_KEY}`;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const resData = await fetchData(githubApi, {
        headers: {
          Authorization: `token ${myToken}`,
        },
      });

      setTimeout(() => {
        setData(resData.data);
        setLoading(false);
      }, 3000);
    };
    getData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Box
          backgroundColor="#334766"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Loader />
        </Box>
      ) : (
        <Suspense fallback={<Fallback>Loading...</Fallback>}>
          <Landing data={data} token={myToken} />
        </Suspense>
      )}
    </div>
  );
}

const Fallback = styled.div`
  background-color: #a5ccf9;
  height: 100vh;
  width: 100%;
`;
export default App;
