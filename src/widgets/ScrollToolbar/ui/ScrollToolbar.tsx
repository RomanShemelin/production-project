import { ScrollToTopButton } from '@/features/scrollTotopButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { memo } from 'react';
import cls from './Scrolltoolbar.module.scss';

interface ScrollToolbarProps {
  className?: string
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
  const { className } = props;

  return (
    <VStack
      justify='center'
      align='center'
      max
      className={classNames(cls.ScrollToolbar, {}, [className])}
    >
      <ScrollToTopButton />
    </VStack>
  );
});