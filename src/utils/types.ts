
// file:        types.ts 
// remarks:     If the file is only defining types, it should be:

export interface RatesResponse {
  success: boolean;
  base: string;
  date: string;
  rates: Record<string, number>;
}
