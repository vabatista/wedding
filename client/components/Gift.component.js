import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';


const gifts = [
	{id: "medusa", src: "img/gifts/medusa.jpg", title: "Cortar a cabeça da medusa", 
		desc: "Nos ajude a lutar junto com Perseu para combater a medusa.", price: "R$ 100"},
	{id: "sistina", src: "img/gifts/sistina.jpg", title: "Pintar a Capela Sistina", 
		desc: "Alguém aí quer pintar a Capela Sistina?", price: "R$ 200"},
	{id: "ulisses", src: "img/gifts/ulisses.jpg", title: "Retornar a Ítaca", 
		desc: "Embarque na Odisséia de Ulisses em seu retorno para Ítaca.", price: "R$ 300"},
];

export default function GiftCards() {
  return (

	<Grid container spacing={2}>
        
			{
				gifts.map(gift => (
					<Grid item xs={4}>			
						<Card sx={{ maxWidth: 500 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									image={gift.src}
									alt={gift.id}
								/>
								<CardContent>
									<Typography gutterBottom variant="h6" component="div">
										{gift.title}
									</Typography>
									<Typography color="text.secondary">
										{gift.desc}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Quero contribuir ({gift.price})
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))
			}
	</Grid>

  );
}