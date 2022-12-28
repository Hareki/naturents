import CloseIcon from '@mui/icons-material/Close';
import OutlinedIconButton from '../buttons/icon-button/icon-button-outlined';
import TextButton from '../buttons/text-button/text-button';
import Modal from '../modal/modal';
import scss from './dialog.module.scss';

export default function Dialog({
  title,
  dismissible,
  children,
  visible,
  onClose,
  onYes,
  onNo,
  onOk
}) {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div className={scss.dialog}>
        {(title || dismissible) && (
          <div className={scss.header}>
            {title && (
              <h2 className={scss.title}>{title ? title : ''}</h2>
            )}

            {dismissible && (
              <OutlinedIconButton
                className={scss['close-button']}
                onClick={onClose}>
                <CloseIcon />
              </OutlinedIconButton>
            )}
          </div>
        )}

        <div className={scss.content}>{children}</div>
        <div className={scss.actions}>
          {onYes && (
            <TextButton onClick={onYes.action}>
              {onYes.message}
            </TextButton>
          )}

          {onNo && (
            <TextButton onClick={onNo.action}>
              {onNo.message}
            </TextButton>
          )}

          {onOk && (
            <TextButton onClick={onOk.action}>
              {onOk.message}
            </TextButton>
          )}
        </div>
      </div>
    </Modal>
  );
}
