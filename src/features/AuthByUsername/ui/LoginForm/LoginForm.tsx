import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'

import { memo, type PropsWithChildren, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(
  ({ className }: PropsWithChildren<LoginFormProps>) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
      dispatch(loginActions.setUsername(value))
    }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value))
    }, [dispatch])
    const onLoginClick = useCallback(() => {
      dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('authorization form')}/>
            {error && <Text text={t('wrong login or password')} theme={TextTheme.ERROR}/>}
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter username')}
                onChange={onChangeUsername}
                value={username}
              />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter password')}
                onChange={onChangePassword}
                value={password}
              />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTlINE}
                onClick={onLoginClick}
                disabled={isLoading}>
                {t('Enter')}
            </Button>
        </div>
    )
  }
)
