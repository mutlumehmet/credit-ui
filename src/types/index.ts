export type RawData = Record<
  | "companyName"
  | "lastReportingDate"
  | "lastReportingPeriod"
  | "nextReportingDate",
  string
> & {
  nextReportingInferred: boolean;
};
