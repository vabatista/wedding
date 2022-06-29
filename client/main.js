/**
 * Main entry point for the client application.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-stickynode';

import Photos from './components/Photos.component';

import Menu from './components/Menu.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';
import GiftCards from './components/Gift.component';
import ReactGA from 'react-ga';

ReactGA.initialize('G-KLT37CSGYG');
ReactGA.pageview('principal');

const websiteContent = (
	<div>

		<TitleBar id="titlebar">
		</TitleBar>

		<div style={{ height: '50px' }}></div>

		<Sticky enabled={true}>
			<Menu id="menu"
				items={[{ label: 'Gabi & Vitor', href: 'gabievitor' },
						{ label: 'Presentes', href: 'presentes' },
						{ label: 'Fotos', href: 'fotos' }]}>
			</Menu>
		</Sticky>

		<TopicContainer id="gabievitor" name="gabievitor" title="Gabi & Vitor">
			<div className="container">
				<div className="row">
					<div className="one-half column">
						<p>
							<a href="img/fotos/gabi.jpg"><img className="thumbnail" src="img/fotos/gabi.jpg" alt="Gabi" /></a>
							Gabi, mãe do João Pedro e da Manuela, baiana criada no Rio e residente há mais de 20 anos na gélida Teresópolis, amante do carnaval
							e da filosofia, da galera dos direitos humanos, devota de Marisa Monte,
						</p>
					</div>

					<div className="one-half column">
						<p>
							<a href="img/fotos/vitor.jpg"><img className="thumbnail" src="img/fotos/vitor.jpg" alt="Vitor" /></a>
							Vitor, pai do Gabriel e do Artur, mineiro de TimótEo, carioca de afinidade, baiano de coração, atleticano, o cara que curte jogos de 
							tabuleiro e corridas, sambista em franca ascensão, progressista em defesa da igualdade social,</p>
					</div>
				</div>
			</div>

			<hr />

			{/* 	  <p>
        <img className="large-image" src="img/proposal.jpg" alt="Kal Proposing To Jocelyn" />
      </p>
 */}
			<h2 className="center">Escolheram juntos misturar sotaques, livros, discos, contas de streaming e filhos.</h2>

			<hr />

			<h2>Sobre o lugar</h2>
			<p>
				A ideia de comemorar o casamento num samba veio do nosso jeitinho descontraído e folião de ver a vida! E a Lapa foi escolhida porque representa muito a diversidade de sons, pessoas, estilos, e isso muito nos interessa.
				A Rua do Lavradio, onde fica o Rio Scenarium, é linda, e aos sábados, durante o dia, abriga uma ótima feirinha de artesanato, lugar que adoramos ir. De noite, apesar de ficar na região da Lapa, o local é bem tranquilo.
				O Rio Scenarium é uma atração à parte! Vale fazer um pequeno tour para apreciar os diversos espaços, as antiguidades e os detalhes do casarão. Mais informações 
				em <a href="https://www.rioscenarium.com.br/" target="_blank">https://www.rioscenarium.com.br/</a>.
			</p>
			<h2>Trajes</h2>
			<p>
				Aqui vão algumas dicas de vestimentas: a pedida é roupa confortável pra dançar a noite toda!
				Pode ser vestido curto ou longo, moletom, camiseta de malha ou social, bermuda ou calça, pode exagerar no glitter ou ir de cara lavada, salto fino ou tênis, roupa chique, roupa básica, vai como quiser!!!
				Não haverá cerimônia ou trajes de casamento, é uma comemoração, não um evento formal.
			</p>
		</TopicContainer>

		<TopicContainer id="presentes" title="Presentes">
			<p>Colaborações para nossa lua de mel na Grécia e Itália são muito bem-vindas!</p>
 			<GiftCards />
		</TopicContainer>

		<TopicContainer id="fotos" title="Fotos">
 			<Photos />
			<hr />

		</TopicContainer>

	</div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
