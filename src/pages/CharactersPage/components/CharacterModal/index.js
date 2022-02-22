import React from 'react';
import Modal from '@material-ui/core/Modal';
import { useStyles } from './styles';

import { characterStatus } from '../../../../enums/index';

const CharacterModal = ({ isOpened, onClose, activeCharacter }) => {
  const classes = useStyles();

  return (
    <Modal
      open={isOpened}
      onClose={onClose}
      disableAutoFocus
      disableEnforceFocus
    >
      <div className={classes.modal}>
        <div
          className={classes.modalImage}
          style={{ backgroundImage: `url(${activeCharacter.image})` }}
        ></div>
        <h2 className={classes.modalName}>{activeCharacter.name}</h2>
        <div className={classes.itemInfo}>
          <div
            className={classes.itemIndicator}
            style={{ backgroundColor: characterStatus[activeCharacter.status] }}
          ></div>
          <span className={classes.modalStatus}>
            {activeCharacter.status} - {activeCharacter.species} -{' '}
            {activeCharacter.gender}
          </span>
        </div>
        <div style={{ display: 'flex' }}>
          <p className={classes.modalText}>Last known location :</p>&nbsp;
          <p className={classes.modalLocation}>
            {activeCharacter.location?.name}
          </p>
        </div>
        <p className={classes.modalText}>First seen in:</p>
        <p className={classes.modalLocation}>{activeCharacter.origin?.name}</p>
      </div>
    </Modal>
  );
};

export default CharacterModal;
