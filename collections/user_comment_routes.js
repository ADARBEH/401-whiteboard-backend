'use strict';

class user_comment_routes {
  constructor(model) {
    this.model = model;
  }

  async create(obj) {
    try {
      return await this.model.create(obj);
    } catch (e) {
      console.error('Error during the creation');
    }
  }

  async read(id) {
    try {
      if(id) {
        return await this.model.findOne({where: {id: id}});
      } else {
        return await this.model.findAll();
      }
    } catch (e) {
      console.error(`Error in reading data with the id: `);
    }
  }

  async update(id, obj) {
    try {
      const dataById = await this.model.findOne({where: {id}});
      return await dataById.update(obj);
    } catch(e) {
      console.error(`Error while updating data with id:`);
    }
  }

  async delete(id) {
    try {
      return await this.model.destroy({where: {id}})
    } catch(e) {
      console.error(`Error while deleting the data with id: `)
    }
  }


  async readWithComments(Comment) {
    try {
      return await this.model.findAll({include: [Comment]})
    } catch(e) {
      console.error(`Error while reading the data with comments`);
    }
  }
}


module.exports = user_comment_routes;