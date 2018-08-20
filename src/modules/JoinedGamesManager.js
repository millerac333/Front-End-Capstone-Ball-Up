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
  add: {
    value: function(resource) {
      return this.postData("joinedGames", resource);
    }
  },
  leave: {
    value: function(resource) {
      return this.deleteData("joinedGames", resource);
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
