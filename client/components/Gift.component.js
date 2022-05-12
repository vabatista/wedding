import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function GiftCards() {
  return (

	<Grid container spacing={2}>
        <Grid item xs={6}>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						image="img/gifts/medusa.jpg"
						alt="medusa"
					/>
					<CardContent>
						<Typography gutterBottom variant="h6" component="div">
							Cortar a cabeça da medusa
						</Typography>
						<Typography color="text.secondary">
							Nos ajude a lutar junto com Perseu para combater a medusa.
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Quero contribuir (R$ 100,00)
					</Button>
				</CardActions>
			</Card>
        </Grid>
        <Grid item xs={6}>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						image="img/gifts/sistina.jpg"
						alt="medusa"
					/>
					<CardContent>
						<Typography gutterBottom variant="h6" component="div">
							Pintar a Capela Sistina
						</Typography>
						<Typography color="text.secondary">
							Alguém aí quer pintar a Capela Sistina?
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Quero contribuir (R$ 200,00)
					</Button>
				</CardActions>
			</Card>
		</Grid>	
	</Grid>

  );
}