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
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    modalTextContent: '',
    path: accountcreator,
    anchor: 'https://youtube.com',
    info: 'Logo Account Creator',
    highlights: ['']
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
    highlights: ['domínio', 'TLD', 'endereço de email', 'conta de email']
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
    title: 'Super Scrapper',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    modalTextContent: '',
    path: scrapsender,
    anchor: '#',
    info: 'Logo Super Sender',
    highlights: ['']
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    modalTextContent: '',
    path: superscrapper,
    anchor: '#',
    info: 'Logo Super Scrapper',
    highlights: ['']
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
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    modalTextContent: '',
    path: supersender,
    anchor: '#',
    info: 'Logo Super Sender',
    highlights: ['']
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
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    modalTextContent: '',
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
