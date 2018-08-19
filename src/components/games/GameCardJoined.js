// import React, { Component } from "react";

// export default class ApendJoin extends Component {
//   state = {
//     otherGames: this.props.otherGames,
//     userId: this.props.otherGames.userId,
//     joinedUserId: this.props.otherGames.joinedUserId
//   };

//   apendJoin = joinedUserId => {
//     this.setState({
//       clicks: +this.props.otherGames.joinedUserId,
//       show: true
//     });
//   };

//   decreaseItem = () => {
//     this.setState({ clicks: this.state.clicks - 1 });
//   };

//   toggleClick = () => {
//     this.setState({ show: !this.state.show });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
//         <button onClick={this.ToggleClick}>
//           {this.state.show ? "Hide number" : "Show number"}
//         </button>
//         {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
//       </div>
//     );
//   }
// }
