//import { useState } from 'react'
//import { jsonData } from './data'

const jsonData = {
    "menubar1": [
        {
            "name": "Gravity Bridge",
            "logopath": "/logo/grav.ico",
            "configpath": "http://144.76.28.144/snapshots/gravity/gravity.json",
            "wget": "http://144.76.28.144/snapshots/gravity-bridge/gr.tar",
            "torrent": "Coming soon",
            "staking": true,
            "staking_info": "/pathforinfo/gravity.html,www.com"
        },
        {
            "name": "Umee",
            "logopath": "/logo/umee.ico",
            "configpath": "http://144.76.28.144/snapshots/gravity/gravity.json",
            "wget": "http://144.76.28.144/snapshots/umee/umee.tar",
            "torrent": "Coming soon",
            "staking": false
        }
    ],
    "menubar2": [
        {
            "name": "Gravity Bridge",
            "logopath": "/logo/grav.ico",
            "configpath": "http://144.76.28.144/snapshots/gravity/gravity.json",
            "wget": "http://144.76.28.144/snapshots/gravity-bridge/gr.tar",
            "torrent": "Coming soon",
            "staking": true,
            "staking_info": "/pathforinfo/gravity.html,www.com"
        },
        {
            "name": "Umee",
            "logopath": "/logo/umee.ico",
            "configpath": "http://144.76.28.144/snapshots/gravity/gravity.json",
            "wget": "http://144.76.28.144/snapshots/umee/umee.tar",
            "torrent": "Coming soon",
            "staking": false
        }
    ],
    "rpc": [
        {
            "name": "Umee",
            "logopath": "/logo/umee.ico",
            "links": [
                "http://144.76.28.144:80",
                "http://144.76.28.144:82",
                "http://144.76.28.144:83"
            ]
        },
        {
            "name": "Umee",
            "logopath": "/logo/umee.ico",
            "links": [
                "http://144.76.28.144:80",
                "http://144.76.28.144:82",
                "http://144.76.28.144:83"
            ]
        }
    ]
}


function App() {
  const tabs = Object.keys(jsonData)
  const initTab = tabs.length ? tabs[0] : null
  //const [currentTab, setCurrentTab] = useState(initTab)

  return (
    <div id="tabs">
      <ul class="nav">
        {tabs.map((tab) => {
          <li id={tab} ><a href="#" onClick={() => console.log(tab)}>{tab}</a></li>
        })}
        {/*
        <li><a href="#tabs-1">Cosmos hub</a></li>
        */}
      </ul>

      {tabs.map((tab) => <Tab key={tab} {...jsonData[tab]} />)}
    
    </div>
  );
}

function Tab(props) {
  return (
    <div>
      <ul className="row snap">
        <li className="col">
          <figure>
            <img src="img/ico-03.svg" alt="" />
          </figure>
          <strong>{props.name}</strong>
          <p>6666 hours ago</p>
          {props.staking &&
            <div className="btn-holder">
              <a href={props.staking_info} className="button">Stake your tokens</a>
            </div>
          }
        </li>
        <li className="col">
          <div className="tb">
            <div className="td">
              <a href={props.wget} className="button">WGET</a>
            </div>
            <div className="td">
              <a href={props.torrent} className="button">TORRENT</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(App), domContainer);
