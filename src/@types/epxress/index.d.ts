import IDoctor from '../../lib/interfaces/IDoctor';
import IPatient from '../../lib/interfaces/IPatient';

declare global {
  namespace Express {
    interface ProcessEnv {
      PORT: number;
      MONGO_USER: string;
      MONGO_PASSWORD: string;
      MONGO_HOST: string;
    }
    interface Request {
      usr: IDoctor | IPatient;
    }
  }
}
