import React, { useState } from 'react';
import { FlipCard } from './components/card/FlipCard'
import { Header } from './components/header/Header'
import { CardModal } from './components/card-modal/CardModal'
import './styles/global.css'
import styles from './styles/app.module.css'
import accountcreator from './assets/img/accountcreator.jpg'
import checkoperadora from './assets/img/checkoperadora.jpg'
import chipcontrol from './assets/img/chipcontrol.jpg'
import mailchecker from './assets/img/mailchecker.jpg'
import mailwarmer from './assets/img/mailwarmer.jpg'
import megabase from './assets/img/megabase.jpg'
import megafeed from './assets/img/megafeed.jpg'
import megalead from './assets/img/megalead.jpg'
import scrapsender from './assets/img/scrapsender.jpg'
import superscrapper from './assets/img/superscrapper.jpg'
import superseller from './assets/img/superseller.jpg'
import supersender from './assets/img/supersender.jpg'
import zapchecker from './assets/img/zapchecker.jpg'
import zapwarmer from './assets/img/zapwarmer.jpg'

export function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitleContent, setModalTitleContent] = useState ('');
  const [modalLinkContent, setModalLinkContent] = useState ('');

  const cardInfo = [{
    title: 'Account Creator',
    text: 'Plataforma para cadastro e criação maciça de contas de email e em Redes Sociais.',
    modalTextContent: 'Serviço disponível para criação de contas em mais de 30 serviços de email gratuito (Outlook, Yahoo, Gmail, Yandex, Mail.com, AOL, BOL, etc) e nas principais redes sociais (Facebook, Instagram, X, LinkedIn, etc).',
    path: accountcreator,
    anchor: 'https://youtube.com',
    info: 'Logo Account Creator',
    highlights: ['contas de email', 'Redes Sociais']
  },
  {
    title: 'Check Operadora',
    text: 'Plataforma que verifica se um número de telefone é válido ou não, se o número é portado e qual é a operadora atual.',
    modalTextContent: 'Os arquivos com os números para verificação devem ser carregados na plataforma via planilhas (em .XLSX ou .CSV) com até 100.000 linhas. Serviço com capacidade de processar e verificar até 60.000 números por hora.',
    highlights: ['número de telefone'],
    path: checkoperadora,
    anchor: '#',
    info: 'Logo Check Operadora'
  },
  {title: 'Chip Control',
    text: 'Plataforma para monitoramento e controle de dispositivos chipados, como smartphones e modens.',
    modalTextContent: 'A plataforma verifica: se o dispositivo está respondendo ou não, se o chip ou dispositivo está com os serviços de mensageria via SMS, WhatsApp e Telegram ativos e se as contas de serviços associados ao cadastro do chip, como GMAIL, Yahoo Mail e MSN Outlook estão desbloqueados. Controla versionamento de softwares e aplicativos, além de fazer a gestão dos créditos e recargas de cada chip.',
    path: chipcontrol,
    anchor: '#',
    info: 'Logo Chip Control',
    highlights: ['dispositivos chipados']
  },
  {
    title: 'Mail Checker',
    text: 'Plataforma para verificação de integridade de listas de e-mails.',
    modalTextContent: 'A solução verifica: se o domínio associado à conta existe e está ativo, se a TLD é válida, se o endereço de email é válido ou não, se a conta de email está ativa e apta a receber mensagens e permite o disparo de uma mensagem-teste.\n\nCorrige automaticamente erros comuns de digitação e sintaxe. Tem como objetivo reduzir a taxa de bounce de listas de disparo de email e com isso melhorar o score dos respectivos remetentes.\n\nOs arquivos com os endereços de email para verificação devem ser carregados na plataforma via planilhas (em .XLSX ou .CSV) com até 100.000 linhas. Serviço com capacidade de processar e verificar até 120.000 e-mails por hora.',
    path: mailchecker,
    anchor: '#',
    info: 'Logo Mail Checker',
    highlights: ['verificação de integridade']
  },
  {
    title: 'Mail Warmer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    modalTextContent: '',
    path: mailwarmer,
    anchor: '#',
    info: 'Logo Mail Warmer',
    highlights: ['']
  },
  {
    title: 'Mega base',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    modalTextContent: '',
    path: megabase,
    anchor: '#',
    info: 'Logo Mega Base',
    highlights: ['']
  },
  {
    title: 'Mega Feed',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    modalTextContent: '',
    path: megafeed,
    anchor: '#',
    info: 'Logo Mega Feed',
    highlights: ['']
  },
  {
    title: 'Mega Lead',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    modalTextContent: '',
    path: megalead,
    anchor: '#',
    info: 'Logo Mega Lead',
    highlights: ['']
  },
  {
    title: 'Scrap Sender',
    text: ' Plataforma para envio maciço de mensagens privadas para usuários de plataformas, fóruns e Market Places web-based.',
    modalTextContent: 'O funcionamento é simples. Basta definir um critério de busca e filtragem no site de classificados ou fórum desejado, copiar a URL com o resultado dessa busca e colar essa URL no ScrapSender. Em seguida, escreva a mensagem que você gostaria de enviar para os usuários ou anunciantes do site de destino e o endereço de email onde você quer receber as respostas e pronto! Capacidade de envio de até 30.000 mensagens por hora.',
    path: scrapsender,
    anchor: '#',
    info: 'Logo Super Sender',
    highlights: ['fóruns', 'Market Places web-based']
  },
  {
    title: 'Super Scrapper',
    text: 'Plataforma para extração de dados de sites, portais e plataformas web.',
    modalTextContent: 'Pode ser adaptado para extração de dados em praticamente qualquer plataforma acessível via protocolo http ou https. O funcionamento é muito simples. Basta definir um critério de busca e filtragem no site desejado, copiar a URL com o resultado dessa busca e colar essa URL no SuperScraper. Em alguns segundos todos os dados da busca selecionada serão exportados para uma planilha em formato .XLSX',
    path: superscrapper,
    anchor: '#',
    info: 'Logo Super Scrapper',
    highlights: ['sites', 'portais', 'plataformas web']
  },
  {
    title: 'Super Seller',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    modalTextContent: '',
    path: superseller,
    anchor: '#',
    info: 'Logo Super Seller',
    highlights: ['']
  },
  {
    title: 'Super Sender',
    text: 'Plataforma para disparo maciço de mensagens multimídia via SMS, Flash SMS, MMS, WhatsApp, Telegram e email.',
    modalTextContent: 'Funcionamento simples e intuitivo. Disparos agendados e programados via planilha em formato .XLSX. Relatórios podem ser gerados e visualizados na própria plataforma ou exportados em .XLSX, .CSV ou .TXT.\n\nCapacidade de envio/dia:\n\n• 1.200.000 SMS/Flash SMS\n\n• 200.000 MMS\n\n• 1.000.000 de e-mails\n\n• 2.400.000 mensagens de WhatsApp\n\n• 600.000 mensagens de Telegram',
    path: supersender,
    anchor: '#',
    info: 'Logo Super Sender',
    highlights: ['SMS', 'Flash SMS', 'MMS', 'WhatsApp', 'Telegram', 'email']
  },
  {
    title: 'Zap Checker',
    text: 'Plataforma que verifica se um número de telefone tem uma conta de WhatsApp associada a ele. Em caso positivo, salva as informações disponíveis, de acordo com as configurações de privacidade de cada usuário.',
    modalTextContent: 'Dados verificados: WhatsApp (Sim ou Não), tipo (Business ou Individual), nome do titular, foto, mensagem de status. Quando a conta verificada for modo "Business", salva também: ramo de atividade, website, email e endereço.\n\nOs arquivos com os números para verificação devem ser carregados na plataforma via planilhas (em .XLSX ou .CSV) com até 100.000 linhas. Serviço com capacidade de processar e verificar até 20.000 números por hora.',
    path: zapchecker,
    anchor: '#',
    info: 'Logo Zap Checker',
    highlights: ['número de telefone']
  },
  {
    title: 'Zap Warmer',
    text: 'Plataforma para aquecimento e preparação de contas de WhatsApp para envio maciço de mensagens.',
    modalTextContent: 'Evita os bloqueios de contas por parte dos algoritmos de proteção AntiSpam da Meta. Capacidade de aquecer até 300 contas whatsapp simultaneamente, para envio de até 86.400 mensagens/dia por conta modo Businesse e 43.200 no modo Personal.',
    path: zapwarmer,
    anchor: '#',
    info: 'Zap Warmer',
    highlights: ['']
  }];

  const handleOpenModal = (content, titleContent, linkContent) => {
    setModalContent(content);
    setModalTitleContent(titleContent);
    setModalLinkContent(linkContent);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent('');
    setModalTitleContent('');
    setModalLinkContent('');
  };

  const formatTextWithLineBreaks = (text) => {
    return text.split('\n').map((item, key) => {
      return (
        <span key={key}>
          {item}
          <br />
        </span>
      );
    });
  };

  return (
    <div>
        <Header/>

        <div className={styles.space}>
          <div className={styles.grid}>
            {cardInfo.map((item, index) => {
                return (
                <FlipCard
                key={index}
                path={item.path}
                info={item.info}
                text={item.text}
                highlights={item.highlights}
                anchor={item.anchor}
                onButtonClick={() => handleOpenModal(cardInfo[index].modalTextContent, cardInfo[index].title, cardInfo[index].anchor)}/>
              )})
          }
          <CardModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              modalTitle={modalTitleContent}
              content={formatTextWithLineBreaks(modalContent)}
              modalLink={modalLinkContent}>
              </CardModal>
        </div>
      </div>
    </div>
  )
}
