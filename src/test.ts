export const jsonLog = (text: string, data: unknown) =>
  console.log(text, JSON.stringify(data, null, 2));
