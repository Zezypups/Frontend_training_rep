import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {films} from "./searchInfo"

export default function SearchBar() {
  console.log(films)
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm)
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 20 }}>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 600 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <tbody>
        {films.filter((film) =>{
          return searchTerm.toLowerCase() === '' ? film : film.name.toLowerCase().includes(searchTerm);
        }).map((film) => (
          <><tr>
          <td>{film.name}</td>
          </tr>
          <tr>
            <td>{film.year}</td>
          </tr>
          <tr>
            <td>{film.my_rating}</td>
          </tr>
          </>
        ))}
      </tbody>
    </Container>
  );
}