import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'

import type { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export function PageError (props: PropsWithChildren<PageErrorProps>) {
  const { className } = props
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  )
}
