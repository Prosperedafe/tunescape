import { useState, useEffect } from "react";
import axios from "axios";

export const Albums = () => {
  const [album, setAlbum] = useState("");
  console.log(album);
  const options = {
    method: "GET",
    url: "https://spotify81.p.rapidapi.com/albums",
    params: { ids: "3IBcauSj5M2A6lTeffJzdv" },
    headers: {
      "X-RapidAPI-Key": "6bbf32ac24msh593d8e7bd905bf4p10be4cjsn10c4fc06af13",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };
  const fetchAlbums = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setAlbum(response.data.albums[0].artists[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchAlbums();
  }, []);
  return (
    <section>
      <p>{album.name}</p>
      <p>{album.type}</p>
      <img src="" alt="" />
    </section>
  );
};
