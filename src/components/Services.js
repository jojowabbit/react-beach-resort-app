import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "variety of cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio voluptatem, eum culpa alias facere?",
      },
      {
        icon: <FaHiking />,
        title: "guided hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio voluptatem, eum culpa alias facere?",
      },
      {
        icon: <FaShuttleVan />,
        title: "shuttle service",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio voluptatem, eum culpa alias facere?",
      },
      {
        icon: <FaBeer />,
        title: "selection of beers",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio voluptatem, eum culpa alias facere?",
      },
    ],
  };
  render() {
    return (
      <>
        <section className="services">
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}
