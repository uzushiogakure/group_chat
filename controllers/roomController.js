const { Room } = require("../models");

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
      const room = await Room.findOne({
        where: { id },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
          {
            model: Chat,
            through: {
              attributes: { exclude: ["createdAt"] },
            },
            include: [
              {
                model: User,
                through: {
                  attributes: { exclude: ["createdAt", "updatedAt"] },
                },
              },
            ],
          },
        ],
      });

      if (!room) throw { name: "NotFound" };

      res.status(200).json(room);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RoomController;
