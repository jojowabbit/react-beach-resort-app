import React, { Component } from "react";
import { Link } from "react-router-dom";

import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { RoomContext } from "../Context";

export default class SingleRoom extends Component {
  // to access props by react router dom
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    return <>SingleRoom</>;
  }
}
