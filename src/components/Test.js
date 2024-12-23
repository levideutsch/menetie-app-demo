import Auth from "./auth";
import { db } from "../config/firebase-config";
import { useState, useEffect } from "react";
import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore";

function Test() {
    const [movieList, setMovieList] = useState([])
    const [newMovieTitle, setNewMovieTitle] = useState("")
    const [newMovieReleaseDate, setNewMovieReleaseDate] = useState(0)
  
    const moviesCollectionRef = collection(db, "movies")
  
    useEffect(() => {
  
      const getMovieList = async() => {
        try {
          const data = await getDocs(moviesCollectionRef)
          const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
          console.log(filteredData)
          setMovieList(filteredData)
        } catch (err){
          console.log(err)
        }
      }
  
      getMovieList()
    }, [])
  
  
    const onSubmitMovie = async () => {
      try {
        await addDoc(moviesCollectionRef, 
          {
          title: newMovieTitle, 
          releaseDate: newMovieReleaseDate
         }
        )
      } catch (err) {
        console.log(err)
      }
    }
  
    const deleteMovie = async (id) => {
      const movieDoc = doc(db, "movies", id)
      await deleteDoc(movieDoc)
    }
  
    return (
      <div>
        Menitie app demo
        <h1>Hello Dovi and Yossi</h1>
        <Auth />
  
  
      <div style={{marginTop: "100px"}}>
        <input  
        placeholder="Movie title" 
        type="text"
        onChange={(e) =>setNewMovieTitle(e.target.value)}
        />
        <input 
        placeholder="Release date"
        type="number"
        onChange={(e) => setNewMovieReleaseDate(Number(e.target.value))}
        />
        <button onClick={onSubmitMovie}>submit movie hey</button>
      </div>
  
  
        <div style={{marginTop: "100px"}}>
          {movieList?.map((movie) => (
            <div key={movie.id}>
              {movie.title}
              <button onClick={() => deleteMovie(movie.id)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Test;