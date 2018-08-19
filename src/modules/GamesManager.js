import GeneralManager from "./GeneralManager";

export default Object.create(GeneralManager, {
  get: {
    value: function(id) {
      return this.getSingleDataBlock("games", id);
    }
  },
  all: {
    value: function() {
      return this.getAllData("games");
    }
  },
  add: {
    value: function(resource) {
      return this.postData("games", resource);
    }
  },
  addAndList: {
    value: function(resource) {
      return this.postData("games", resource).then(() => this.all());
    }
  },
  removeAndList: {
    value: function(id) {
      return this.deleteData("games", id)
        .then(() => this.all("games"))
        .then(() => this.props.history.push("/games"));
    }
  },
  updateAndList: {
    value: function(id) {
      return this.patchData("games", id).then(() => this.all());
    }
  }
  // getWithLocation: {
  //     value: function (id) {
  //         return fetch(`${settings.remoteURL}/games/${id}/?_expand=location`).then(e => e.json())
  //     }
  // },
  // listWithLocation: {
  //     value: function (id) {
  //         return fetch(`${settings.remoteURL}/games?_expand=location`).then(e => e.json())
  //     }
  // },
});
