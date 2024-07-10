import React from 'react'


import { useTranslation } from 'react-i18next';


  
const Work = () => {
    const { t } = useTranslation('work');
  return (
    <div>
      <h1 className={"font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl "}>
            {t('worktitle')}
          </h1>
    </div>
  )
}

export default Work
