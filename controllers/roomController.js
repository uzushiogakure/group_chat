const { Room, Chat, User } = require("../models");

class RoomController {
  static async createRoom(req, res, next) {
    try {
      const room = await Room.create(req.body);

      res.status(201).json(room);
    } catch (error) {
      next(error);
    }
  }

  static async getAllRoom(req, res, next) {
    try {
      const rooms = await Room.findAll();

      res.status(200).json(rooms);
    } catch (error) {
      next(error);
    }
  }

  static async getChatRoom(req, res, next) {
    const { id } = req.params;
    try {
      const room = await Chat.findAll({
        where: { RoomId: id },
        include: [User],
      });

      if (!room) throw { name: "NotFound" };

      res.status(200).json(room);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RoomController;
