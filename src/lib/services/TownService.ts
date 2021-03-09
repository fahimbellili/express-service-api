import BadRequestError from '../errors/BadRequestError';
import NotFoundError from '../errors/NotFoundError';
import ITown from '../interfaces/ITown';

class TownService {
  public Town: any;

  constructor({ townModel }: any) {
    this.Town = townModel;
  }

  public async postService(reqData: ITown): Promise<void> {
    const data = new this.Town({ ...reqData });
    try {
      await data.save();
    } catch (error) {
      throw new BadRequestError(error);
    }
  }

  public async updateService(reqData: ITown, dataId: string): Promise<void> {
    try {
      await this.Town.updateOne({ _id: dataId }, { ...reqData, _id: dataId });
    } catch (error) {
      throw new BadRequestError(error);
    }
  }

  public async deleteService(dataId: string): Promise<void> {
    try {
      const data = await this.Town.findOne({ _id: dataId });
      if (!data) {
        throw new NotFoundError();
      }
      await this.Town.deleteOne({ _id: data.id });
    } catch (error) {
      throw new BadRequestError(error);
    }
  }

  public async getOneService(dataId: string): Promise<void> {
    try {
      const data = await this.Town.findOne({ _id: dataId });
      return data;
    } catch (error) {
      throw new BadRequestError(error);
    }
  }

  public async getAllService(): Promise<void> {
    try {
      const data = await this.Town.find();
      return data;
    } catch (error) {
      throw new BadRequestError(error);
    }
  }
}

export default TownService;
