import React from 'react';
import { useTranslation } from 'react-i18next';
import { CustomModal } from '../../../../../common/components/modal/customModal';
import { AuthPopupType } from './domain';
import { useAuthPopup } from './functions';

const AuthPopup: React.FC<AuthPopupType> = ({ closeModal, currentItem }) => {
  const { t } = useTranslation();
  const { handleSaveData } = useAuthPopup(closeModal);
  
  const fields = [
    { label: 'ID', name: 'ID', type: 'hidden' },
    { label: t('common.name'), name: 'api_name'},
    { label: t('common.description'), name: 'api_description', type: 'area' }
  ];

  return (
    <>
      <CustomModal
        contentLabel={currentItem ? t('common.edit') : t('common.add')}
        closeModal={closeModal}
        onSave={handleSaveData}
        fields={fields}
        currentItem={currentItem}
        
      />
    </>
  );
};

export default AuthPopup;