import { FC, useState } from 'react';
import { Modal } from './shared/components/modal/modal';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const onOpenClick = () => {
    setIsShowModal((previous) => !previous);
  };
  return (
    <div style={{ border: '2px solid black' }}>
      <p onClick={onOpenClick}>Click to open the modal</p>
      {isShowModal && <Modal closeClick={onOpenClick} isShow={isShowModal} />}
    </div>
  );
};
