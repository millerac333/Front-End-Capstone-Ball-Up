import GeneralManager from "./GeneralManager";

export default Object.create(GeneralManager, {
  get: {
    value: function(id) {
      return this.getSingleDataBlock("joinedGames", id);
    }
  },
  all: {
    value: function() {
      return this.getAllData("joinedGames");
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
      return this.postData("joinedGames", resource);
    }
  },
  addAndList: {
    value: function(resource) {
      return this.postData("joinedGames", resource).then(() => this.all());
    }
  },
  removeAndList: {
    value: function(id) {
      return this.deleteData("joinedGames", id).then(() => this.all());
    }
  }
});
