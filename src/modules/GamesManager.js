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
  // getWithCaretaker: {
  //     value: function (id) {
  //         return fetch(`${settings.remoteURL}/animals/${id}/?_expand=employee`).then(e => e.json())
  //     }
  // },
  // listWithCaretaker: {
  //     value: function (id) {
  //         return fetch(`${settings.remoteURL}/animals?_expand=employee`).then(e => e.json())
  //     }
  // },
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
});
