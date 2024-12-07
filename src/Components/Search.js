
import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Search({ books, onSaveBook }) {
  const [downloadedBooks, setDownloadedBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDownloadBook = (book) => {
    setDownloadedBooks((prevBooks) => [...prevBooks, book]);
  };

  // Filter and sort books based on the search query and alphabetically by title
  const filteredBooks = books
    .filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div style={{ minHeight: '100vh', padding: '16px' }}>
      <h1 className="h">We have a huge range of books.</h1>

      {/* Search Input */}
      <TextField
        label="Search Books"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Grid container spacing={2}>
        {filteredBooks.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                width: 300,
                height: 400,
                m: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#FEF9D9',
              }}
            >
              <CardMedia
                component="img"
                alt={book.title}
                image={book.image}
                sx={{
                  flexGrow: 1,
                  objectFit: 'cover',
                  maxHeight: 200,
                }}
              />
              <CardContent sx={{ flexShrink: 0 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {book.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-start', mt: 'auto', color: '#8EACCD' }}>
                <Button size="small" onClick={() => handleDownloadBook(book)}>Download</Button>
                <Button size="small" onClick={() => onSaveBook(book)}>Save</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Display downloaded books */}
      {downloadedBooks.length > 0 && (
        <div>
          <h2>Downloaded Books:</h2>
          <ul>
            {downloadedBooks.map((book, index) => (
              <li key={index}>{book.title}</li>
            ))}
          </ul>
        </div>
      )} 

      
    </div>
  );
}
