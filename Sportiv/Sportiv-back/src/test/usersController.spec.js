const sinon = require("sinon");
const { expect } = require("chai");
const usersRoutesController = require("../controllers/usersRoutesController");

describe("USERS ROUTER CONTROLLER", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should respond 400 when ocurr an error", () => {
    const res = {
      status: () => {},
      send: () => {},
    };

    const req = {
      body: {
        authid: "1234",
      },
    };

    const error = true;

    const User = function constructor() {
      this.findOne = (query, callback) => {
        callback(error, false);
      };
    };

    const statusSpy = sinon.spy(res, "status");
    usersRoutesController(User).post(req, res);
    expect(statusSpy.calledWith(404)).to.be.true;
  });
});
