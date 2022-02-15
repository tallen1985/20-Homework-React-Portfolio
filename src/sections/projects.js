import React from "react";
import "./style.css";

export default function Projects() {
  return (
    <div>
      <article className="work" id="work">
        <div className="headline">
          <h1>Works</h1>
        </div>
        <div className="description">
          <div
            className="workCard large"
            id="eCommerceBackend"
            data-active="false"
          >
            <a
              className="cardLink"
              href="https://watch.screencastify.com/v/WfPoKfWJtRiI2LsLfQyc"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cardDescription">
                <h2>E-Commerce Backend</h2>
                <p>CRUD/API/MySql/Sequelize/Dotenv</p>
              </div>
            </a>
          </div>

          <div className="workCard small" id="cryptoWallet" data-active="false">
            <a
              className="cardLink"
              href="https://tallen1985.github.io/cryptocurrencyWallet/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cardDescription">
                <h2>CryptoCurrency Wallet</h2>
                <p>API/LocalStorage/Library Integration</p>
              </div>
            </a>
          </div>

          <div
            className="workCard small"
            id="weatherDashboard"
            data-active="false"
          >
            <a
              className="cardLink"
              href="https://tallen1985.github.io/06-Homework-Weather-Dashboard/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cardDescription">
                <h2>Weather Dashboard</h2>
                <p>Server-side API/LocalStorage/UI-UX Design</p>
              </div>
            </a>
          </div>

          <div className="workCard small" id="noteTaker" data-active="false">
            <a
              className="cardLink"
              href="https://troy-allen-note-taker.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cardDescription">
                <h2>Note Taker</h2>
                <p>Back End Server Integration/Express</p>
              </div>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
