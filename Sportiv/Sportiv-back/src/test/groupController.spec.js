const sinon = require("sinon");
const { expect } = require("chai");
const userController = require("../controllers/groupController");

describe("GROUP CONTROLLER", () => {
  it("it should return res 200", () => {
    afterEach(() => {
      sinon.restore();
    });

    const req = {
      group: { groupName: "Lobos" },
    };

    const res = {
      json: () => {},
      status: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    userController.get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });

  it("it should return res json", () => {
    afterEach(() => {
      sinon.restore();
    });

    const req = {
      group: { groupName: "Lobos" },
    };

    const res = {
      json: () => {},
      status: () => {},
    };

    const jsonSpy = sinon.spy(res, "json");
    const { group } = req;
    userController.get(req, res);
    expect(jsonSpy.calledWith(group)).to.be.true;
  });

  it("it should return res 404", () => {
    afterEach(() => {
      sinon.restore();
    });

    const req = {};

    const res = {
      json: () => {},
      status: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    userController.get(req, res);
    expect(statusSpy.calledWith(404)).to.be.true;
  });

  xit("should res error", () => {
    const User = {
      findOne: (query, callback) => {
        callback(false, user);
      },
    };

    const req = {
      body: {
        user: { sub: 1 },
      },
      group: [{ _id: 5 }],
    };

    const res = {
      status: () => {},
      send: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    const { _id } = req.group[0];
    userController.put(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
});
