import React, { Component } from "react";

import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    // rename featuredRooms to rooms
    const { featuredRooms: rooms } = this.context;
    return (
      <div>
        FeaturedRooms
        <Room />
        <Loading />
      </div>
    );
  }
}
