import GeneralManager from "./GeneralManager";

export default Object.create(GeneralManager, {
  get: {
    value: function(id) {
      return this.getSingleDataBlock("users", id);
    }
  },
  all: {
    value: function() {
      return this.getAllData("users");
    }
  },
  add: {
    value: function(resource) {
      return this.postData("users", resource);
    }
  },
  removeAndList: {
    value: function(id) {
      return this.deleteData("users", id).then(() => this.all());
    }
  },
  addAndList: {
    value: function(resource) {
      return this.postData("users", resource).then(() => this.all());
    }
  }
});
