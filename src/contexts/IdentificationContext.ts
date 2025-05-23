import * as React from 'react';

export interface IIdentificationContextProps {
  identification: string;
  eventEmitter: any;
  keepAlive: boolean;
  getLifecycle: () => number;
  isExisted: () => boolean;
  activated: boolean;
  extra: any;
}

let WithKeepAliveContext = React.createContext<IIdentificationContextProps>({} as any);

export default WithKeepAliveContext;
