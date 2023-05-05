export interface Response {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  data: Data;
}

interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: [];
}
