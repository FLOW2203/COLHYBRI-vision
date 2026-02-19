import { getHreflangAlternates } from '@/lib/navigation';

interface HreflangTagsProps {
  routeKey: string;
}

export function HreflangTags({ routeKey }: HreflangTagsProps) {
  const alternates = getHreflangAlternates(routeKey);
  return (
    <>
      {alternates.map(({ locale, url }) => (
        <link key={locale} rel="alternate" hrefLang={locale} href={url} />
      ))}
    </>
  );
}
