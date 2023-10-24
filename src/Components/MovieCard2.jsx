import React from "react";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllWatchlist } from "../services/allAPI";
import SubNav1 from "./SubNav-1";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
export default function MovieCard2({windowWidth}) {
  const [watchlistUpdateResponce,setWatchlistUpdateResponce]=useState()
  const [allMovies, setAllMoives] = useState([]);
  const [errorMessage,setErrorMessage]=useState("The Watchlist is Empty")
  const navTab = [
    {
      label: "Plan To Watch",
      value: "planToWatch",
      status: `planToWatch`,
    },
    {
      label: "Watched",
      value: "watched",
      status: `watched`,
    },

    {
      label: "My Favourites",
      value: "favourite",
      status:`favourite`,
    },
  ];
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const getAddedWatchlist = async () => {
    try {
      const responce = await getAllWatchlist();
      setAllMoives(responce.data);
      console.log(responce.message);
      if(responce.message==="Network Error"){
        setErrorMessage("no responce from api..! please wait while the server loads")
      }
    } catch ( error) {
      
    }
  };
  


  useEffect(() => {
    getAddedWatchlist();
  }, [watchlistUpdateResponce]);
  return (
    <>
      <Tabs id="custom-animation" value="planToWatch">
        <TabsHeader>
          {navTab.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {navTab.map(({ value, status }) => (
            <TabPanel key={value} value={value}>
              <SubNav1
                baseUrl={baseUrl}
                status={status}
                allMovies={allMovies}
                setWatchlistUpdateResponce={setWatchlistUpdateResponce}
                windowWidth={windowWidth}
                errorMessage={errorMessage}
              />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

      <ToastContainer theme="colored" autoClose={2000} />
    </>
  );
}
