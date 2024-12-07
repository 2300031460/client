
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function Saved({ savedBooks, onUnsaveBook }) {
  return (
    <div style={{ minHeight: '100vh', padding: '16px' }}>
      <h1 class="h">Saved Books</h1>
      <Grid container spacing={2}>
        {savedBooks.length === 0 ? (
          <Typography variant="h6" class="h">No saved books found.</Typography>
        ) : (
          savedBooks.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card 
                sx={{ 
                  width: 300, 
                  height: 400, 
                  m: 2, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between', 
                  backgroundColor: '#FEF9D9' 
                }}
              >
                <CardMedia
                  component="img"
                  alt={book.title}
                  image={book.image}
                  sx={{ 
                    flexGrow: 1, 
                    objectFit: 'cover', 
                    maxHeight: 200 
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
                <CardActions sx={{ justifyContent: 'flex-start', mt: 'auto', color:'#8EACCD' }}>
                  <Button size="small">Download</Button>
                  <Button size="small" onClick={() => onUnsaveBook(book)}>Unsave</Button> {/* Unsave button */}
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}
