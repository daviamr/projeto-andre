import { Card } from './components/card/Card'
import { Header } from './components/header/Header'
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
  const cardInfo = [{
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: accountcreator,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: checkoperadora,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: chipcontrol,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: mailchecker,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: mailwarmer,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: megabase,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: megafeed,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: megalead,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: scrapsender,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: superscrapper,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: superseller,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: supersender,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: zapchecker,
    info: 'testando'
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus repellendus quo eligendi sequi quae ullam amet voluptate id doloremque facere aliquid, porro rerum blanditiis ut velit? Ratione, veritatis! Odit?',
    path: zapwarmer,
    info: 'testando'
  }];

  return (
    <div>
        <Header/>

        <div className={styles.space}>
          <div className={styles.grid}>
            {cardInfo.map((i, index) => {
                return (
                <Card
                key={index}
                image={i.path}
                alt={i.info}
                text={i.text}/>
              )})
          }
        </div>
      </div>
    </div>
  )
}
