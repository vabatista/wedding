import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	height: 500,
	bgcolor: '#464a47',
	border: '2px solid #000',
	boxShadow: '20'
};

const gifts = [
	{
		id: "medusa", src: "img/gifts/medusa.jpg", title: "Cortar a cabeça da medusa",
		desc: "Vamos lutar junto com Perseu para combater a medusa.", price: "100.00"
	},
	{
		id: "sistina", src: "img/gifts/sistina.jpg", title: "Pintar a Capela Sistina",
		desc: "Que tal se juntar a Michelangelo e pintar a capela sistina?", price: "150.00"
	},
	{
		id: "ulisses", src: "img/gifts/ulisses.jpg", title: "Retornar a Ítaca",
		desc: "Calçe suas sandalhas e embarque na Odisséia de Ulisses em seu retorno para Ítaca.", price: "200.00"
	},
	{
		id: "bolonhesa", src: "img/gifts/bolonhesa.jpg", title: "Comer qualquer coisa a bolonhesa em Bolonha",
		desc: "Contribua com a experiência de um jantar de qualquer coisa à bolonhesa em Bolonha.", price: "250.00"
	},
	{
		id: "socrates", src: "img/gifts/socrates.jpg", title: "Dialética com Sócrates",
		desc: "Participe de uma dialética com Sócrates sobre as principais questões da Humanidade.", price: "300.00"
	},
	{
		id: "pitagoras", src: "img/gifts/pitagoras.jpg", title: "Andar na rua com Pitágoras",
		desc: "Abandone as calçadas e ande na rua com Pitágoras. Aproveite para idolatrar o feijão.", price: "350.00"
	},
	{
		id: "gondola", src: "img/gifts/gondola.jpg", title: "Passeio de gôndola",
		desc: "Passeie de gôndola pela cidade sem ruas: Veneza!", price: "500.00"
	},
	{
		id: "coliseu", src: "img/gifts/coliseu.jpg", title: "Batalha no Coliseu Romano",
		desc: "Lute com as principais feras e guerreiros no Coliseu Romano.", price: "1000.00"
	}

];



export default function GiftCards() {

	const [isOpen, setIsOpen] = useState(false);
	const [selectedGift, setSelectedGift] = useState(null);
	const [qrcode, setQrcode] = useState();


	const handleOpen = (gift) => {
		setSelectedGift(gift);
		console.log("Gift clicked: ", gift);
		setQrcode("https://gerarqrcodepix.com.br/api/v1?nome=Vitor%20Alcantara%20Batista&cidade=Rio%20de%20Janeiro&valor=" +
			gift.price + "&saida=qr&chave=03072471630&txid=Presente%20Casamento&tamanho=200");
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
		setSelectedGift(null);
	};

	return (
		<div>
			<div>


				<Grid container spacing={2}>

					{
						gifts.map(gift => (
							<Grid key={gift.id} item xs={4}>
								<Card sx={{ maxWidth: 500 }}>
									<CardActionArea>
										<CardMedia
											component="img"
											image={gift.src}
											alt={gift.id}
										/>
										<CardContent>
											<h2>{gift.title}</h2>
											<p color="text.secondary">
												{gift.desc}
											</p>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="primary" onClick={() => handleOpen(gift)}>
											Quero contribuir  (R$ {gift.price.replace('.', ',')})
										</Button>

									</CardActions>
								</Card>
							</Grid>
						))
					}
				</Grid>
			</div>
			<Modal open={isOpen} onClose={handleClose} BackdropProps={{ style: { backgroundColor: '#000000' } }}>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Você escolheu o presente <b>{selectedGift ? selectedGift.title : ""}</b> 
						no valor de <b>R$ {selectedGift ? selectedGift.price.replace('.', ',') : ""}</b>
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Para fazer uma doação para a lua de mel desse presente,
						use o QR Code abaixo para fazer um Pix para os noivos.
					</Typography>
					<div align="center">
						<img src={selectedGift ? qrcode : ""}
							alt="qrcode" />
					</div>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Ou então use a chave de CPF: <br /><b>030.724.716-30</b> <br />
						diretamente no seu APP de banco.
					</Typography>
				</Box>
			</Modal>
		</div>

	);
}