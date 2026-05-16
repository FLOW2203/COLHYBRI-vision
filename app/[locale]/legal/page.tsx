interface PageProps {
  params: { locale: string };
}

export default function LegalPage({ params: { locale } }: PageProps) {
  const isFr = locale === 'fr' || locale === 'es';

  return (
    <section className="bg-white">
      <div className="section-container max-w-3xl mx-auto prose prose-colhybri">
        <h1 className="font-display text-4xl font-semibold text-colhybri-dark mb-4">
          {isFr ? "Conditions generales d'utilisation" : 'Terms of Service'}
        </h1>
        <p className="text-colhybri-dark/60 text-sm mb-8">
          {isFr ? 'Derniere mise a jour : 16 mai 2026' : 'Last updated: May 16, 2026'}
        </p>

        <h2>{isFr ? 'Editeur du site' : 'Site Publisher'}</h2>
        <p>ONLYMORE Group SAS — Rodilhan (30230), Occitanie, France.</p>
        <p>Email : onlymore2024@gmail.com</p>
        <p>{isFr ? 'Directeur de la publication : Florent Gibert' : 'Publication director: Florent Gibert'}</p>

        <h2>{isFr ? 'Hebergement' : 'Hosting'}</h2>
        <p>Vercel Inc. — San Francisco, CA, USA.</p>

        <h2>{isFr ? 'Propriete intellectuelle' : 'Intellectual Property'}</h2>
        <p>
          {isFr
            ? "L'ensemble du contenu du site colhybri.vision (textes, images, logos, marques) est la propriete exclusive d'ONLYMORE Group SAS. Toute reproduction est interdite sans autorisation ecrite prealable."
            : 'All content on colhybri.vision (text, images, logos, trademarks) is the exclusive property of ONLYMORE Group SAS. Any reproduction is prohibited without prior written authorization.'}
        </p>

        <h2>{isFr ? 'Limitation de responsabilite' : 'Limitation of Liability'}</h2>
        <p>
          {isFr
            ? "ONLYMORE Group SAS ne saurait etre tenu responsable des dommages directs ou indirects resultant de l'utilisation du site."
            : 'ONLYMORE Group SAS cannot be held responsible for direct or indirect damages resulting from the use of this website.'}
        </p>

        <h2>Contact</h2>
        <p>onlymore2024@gmail.com</p>
      </div>
    </section>
  );
}
