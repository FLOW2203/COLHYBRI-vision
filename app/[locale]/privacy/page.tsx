interface PageProps {
  params: { locale: string };
}

export default function PrivacyPage({ params: { locale } }: PageProps) {
  const isFr = locale === 'fr' || locale === 'es';

  return (
    <section className="bg-white">
      <div className="section-container max-w-3xl mx-auto prose prose-colhybri">
        <h1 className="font-display text-4xl font-semibold text-colhybri-dark mb-4">
          {isFr ? 'Politique de confidentialite' : 'Privacy Policy'}
        </h1>
        <p className="text-colhybri-dark/60 text-sm mb-8">
          {isFr ? 'Derniere mise a jour : 16 mai 2026' : 'Last updated: May 16, 2026'}
        </p>

        <h2>{isFr ? 'Responsable du traitement' : 'Data Controller'}</h2>
        <p>ONLYMORE Group SAS — Rodilhan (30230), Occitanie, France.</p>
        <p>Contact : onlymore2024@gmail.com</p>

        <h2>{isFr ? 'Donnees collectees' : 'Data Collected'}</h2>
        <p>
          {isFr
            ? 'Le site colhybri.vision ne collecte aucune donnee personnelle sans votre consentement. Les formulaires de contact transmettent uniquement les informations que vous fournissez volontairement.'
            : 'The website colhybri.vision does not collect any personal data without your consent. Contact forms only transmit information you voluntarily provide.'}
        </p>

        <h2>{isFr ? 'Hebergement' : 'Hosting'}</h2>
        <p>Vercel Inc. — San Francisco, CA, USA.</p>

        <h2>{isFr ? 'Vos droits' : 'Your Rights'}</h2>
        <p>
          {isFr
            ? "Vous disposez d'un droit d'acces, de rectification et de suppression de vos donnees. Contactez-nous a onlymore2024@gmail.com."
            : 'You have the right to access, rectify, and delete your data. Contact us at onlymore2024@gmail.com.'}
        </p>
      </div>
    </section>
  );
}
