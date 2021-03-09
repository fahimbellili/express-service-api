import { Router, Request, Response } from 'express';
import axios from 'axios';
import * as xmlParser from 'xml2json';

import { parking_get_url } from '../../conf/url.conf';

class TownController {
  public router;
  public townService;

  constructor({ townService }: any) {
    this.router = Router();
    this.townService = townService;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(parking_get_url, this.getOneTown);
  }

  public getOneTown = async (req: Request, res: Response): Promise<unknown> => {
    const dataId = req.params.id;
    try {
      const data = await this.townService.getOneService(dataId);
      const parkingUrl = data.parkingUrl;
      const parkingData = await axios.get(parkingUrl);
      return res.status(200).json(parkingData.data);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

export default TownController;
