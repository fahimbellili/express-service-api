import { Router, Request, Response } from 'express';

import { objectCreationSuccess, objectDeleteSuccess, objectUpdateSuccess } from '../wording/wording';
import { town_post_url, town_put_del_get_one_url, town_get_all_url } from '../../conf/url.conf';

class TownController {
  public router;
  public townService;

  constructor({ townService }: any) {
    this.router = Router();
    this.townService = townService;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(town_post_url, this.postTown);
    this.router.put(town_put_del_get_one_url, this.updateTown);
    this.router.delete(town_put_del_get_one_url, this.deleteTown);
    this.router.get(town_put_del_get_one_url, this.getOneTown);
    this.router.get(town_get_all_url, this.getAllTowns);
  }

  private postTown = async (req: Request, res: Response): Promise<unknown> => {
    const dataObject = req.body;
    delete dataObject.id;
    try {
      await this.townService.postService(dataObject);
      return res.status(200).json({ message: objectCreationSuccess });
    } catch (error) {
      return res.status(422).json({ message: error.message });
    }
  };

  private updateTown = async (req: Request, res: Response): Promise<unknown> => {
    const dataId = req.params.id;
    const dataObject = req.body;
    try {
      await this.townService.updateService(dataObject, dataId);
      return res.status(200).json({ message: objectUpdateSuccess });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  public deleteTown = async (req: Request, res: Response): Promise<unknown> => {
    const dataId = req.params.id;
    try {
      await this.townService.deleteService(dataId);
      return res.status(200).json({ message: objectDeleteSuccess });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  public getOneTown = async (req: Request, res: Response): Promise<unknown> => {
    const dataId = req.params.id;
    try {
      const data = await this.townService.getOneService(dataId);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  public getAllTowns = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const data = await this.townService.getAllService();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

export default TownController;
