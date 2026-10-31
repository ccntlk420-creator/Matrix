export interface EvidenceDossier {
  id: string;
  code: string;
  title: string;
  category: 'demography' | 'statistics' | 'history' | 'crowds' | 'npc' | 'documents';
  summary: string;
  fullAnalysis: string;
  quote?: string;
  quoteSource?: string;
  timestamp?: string;
  status: 'ПОДТВЕРЖДЕНО ГИПОТЕЗОЙ' | 'ТРЕБУЕТ ВЕРИФИКАЦИИ' | 'АРХИВНОЕ СВИДЕТЕЛЬСТВО' | 'КРИТИЧЕСКАЯ АНОМАЛИЯ';
  source: string;
  dateAdded: string;
  classificationLevel: 'DECLASS-01' | 'RESTRICTED' | 'EYES-ONLY';
  keyMetrics?: { label: string; value: string }[];
}

export interface DemographicDataPoint {
  year: number;
  officialPopulation: number; // in billions
  alternativePopulation: number; // in billions
  uncertaintyMargin: number; // in millions
  milestone?: string;
  historicalEvent?: string;
}

export interface ArchiveDocument {
  id: string;
  archiveId: string;
  title: string;
  category: 'texts' | 'documents' | 'photos' | 'screenshots' | 'video' | 'charts';
  date: string;
  author: string;
  classification: string;
  description: string;
  tags: string[];
  excerpt?: string;
}

export interface VideoChapter {
  time: string;
  seconds: number;
  title: string;
  description: string;
  linkedDossierId?: string;
}

export interface NPCType {
  id: string;
  code: string;
  name: string;
  description: string;
  behaviorTraits: string[];
  observedFrequency: string;
  sociologicalNote: string;
}
