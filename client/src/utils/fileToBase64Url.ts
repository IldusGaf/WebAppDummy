export const fileToBase64Url = (file: any, callback: (base64: string) => any) => {
  console.log(file);
  const reader = new FileReader() as FileReader;
  reader.readAsDataURL(file);
  reader.onload = () => callback(typeof reader.result === 'string' ? reader.result.replace(/^.*,/, '') : 'хрен тебе а не blob');
};
