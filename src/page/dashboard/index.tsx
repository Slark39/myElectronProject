import React from 'react';

import Styles from './style.module.scss';
import LogoComponent from '../../components/LogoComponent';
import BalanceTable from '../../components/BalanceTable';
import AiTable from '../../components/AiTable';
import SignalTable from '../../components/SignalTable';
import StateInfo from '../../components/StateInfo';
import ChartGroup from '../../components/ChartGroup';
import StatusTable from '../../components/StatusTable';

export default function DashBoard() {
  return (
    <div className="flex flex-row justify-normal space-x-3">
      <div className={Styles.addInfo}>
        <LogoComponent />
        <BalanceTable />
        <AiTable />
        <SignalTable />
      </div>
      <div className={Styles.mainInfo}>
        <StateInfo />
        <ChartGroup />
        <StatusTable />
      </div>
    </div>
  );
}
