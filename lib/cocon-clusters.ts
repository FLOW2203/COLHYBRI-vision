/**
 * Cluster metadata for the COLHYBRI SEO/GEO cocon.
 * Generated pages under app/[locale]/<slug>/page.tsx import CLUSTERS
 * to resolve the pillar link, the pillar label, and the localized
 * cluster name to show in the breadcrumb.
 */

export type ClusterId =
  | 'france'
  | 'usa'
  | 'solidaire'
  | 'digital'
  | 'impact'
  | 'product'
  | 'international';

export interface ClusterMeta {
  id: ClusterId;
  labelFr: string;
  labelEn: string;
  labelEs: string;
  pillar: string;
  pillarLabelFr: string;
  pillarLabelEn: string;
  pillarLabelEs: string;
}

export const CLUSTERS: Record<ClusterId, ClusterMeta> = {
  france: {
    id: 'france',
    labelFr: 'Revitalisation France',
    labelEn: 'France Revitalization',
    labelEs: 'Revitalizacion Francia',
    pillar: '/impact/france',
    pillarLabelFr: 'Impact France',
    pillarLabelEn: 'France Impact',
    pillarLabelEs: 'Impacto Francia',
  },
  usa: {
    id: 'usa',
    labelFr: 'Revitalisation USA',
    labelEn: 'USA Revitalization',
    labelEs: 'Revitalizacion USA',
    pillar: '/impact/usa',
    pillarLabelFr: 'Impact Etats-Unis',
    pillarLabelEn: 'USA Impact',
    pillarLabelEs: 'Impacto EE.UU.',
  },
  solidaire: {
    id: 'solidaire',
    labelFr: 'Commerce solidaire',
    labelEn: 'Community Commerce',
    labelEs: 'Comercio solidario',
    pillar: '/solution/pool-solidaire',
    pillarLabelFr: 'Pool solidaire',
    pillarLabelEn: 'Community pool',
    pillarLabelEs: 'Pool solidario',
  },
  digital: {
    id: 'digital',
    labelFr: 'Digitalisation commerce',
    labelEn: 'Commerce Digitalization',
    labelEs: 'Digitalizacion comercio',
    pillar: '/solution/maps-plus',
    pillarLabelFr: 'Maps+',
    pillarLabelEn: 'Maps+',
    pillarLabelEs: 'Maps+',
  },
  impact: {
    id: 'impact',
    labelFr: 'Impact social',
    labelEn: 'Social Impact',
    labelEs: 'Impacto social',
    pillar: '/impact',
    pillarLabelFr: 'Impact global',
    pillarLabelEn: 'Global impact',
    pillarLabelEs: 'Impacto global',
  },
  product: {
    id: 'product',
    labelFr: 'Produit COLHYBRI',
    labelEn: 'COLHYBRI Product',
    labelEs: 'Producto COLHYBRI',
    pillar: '/solution',
    pillarLabelFr: 'Solution',
    pillarLabelEn: 'Solution',
    pillarLabelEs: 'Solucion',
  },
  international: {
    id: 'international',
    labelFr: 'International',
    labelEn: 'International',
    labelEs: 'Internacional',
    pillar: '/impact/europe',
    pillarLabelFr: 'Impact Europe',
    pillarLabelEn: 'Europe Impact',
    pillarLabelEs: 'Impacto Europa',
  },
};

export function getClusterLabel(cluster: ClusterMeta, locale: string): string {
  if (locale === 'fr') return cluster.labelFr;
  if (locale === 'es') return cluster.labelEs;
  return cluster.labelEn;
}

export function getPillarLabel(cluster: ClusterMeta, locale: string): string {
  if (locale === 'fr') return cluster.pillarLabelFr;
  if (locale === 'es') return cluster.pillarLabelEs;
  return cluster.pillarLabelEn;
}
