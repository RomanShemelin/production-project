import { classNames } from 'shared/lib/classNames/classNames';

import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getUserAuthData } from 'entities/User';
import { useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export function ArticleDetailsPageHeader (
  props: PropsWithChildren<ArticleDetailsPageHeaderProps>
) {
  const { className } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getUserAuthData)
  const article = useSelector(getArticleDetailsData)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles_details}${article?.id as string}/edit`);
  }, [article?.id, navigate]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button onClick={onBackToList}>{t('Back to list of articles')}</Button>
      {canEdit && <Button onClick={onEditArticle}>{t('Edit')}</Button>}
    </HStack>
  );
}