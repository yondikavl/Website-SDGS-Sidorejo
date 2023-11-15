const { GoogleSpreadsheet } = require("google-spreadsheet");
export const postForm = async (data) => {
  //inisialisasi file Google Sheet yang akan digunakan
  const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_SHEETS_ID);
  try {
    //1.lakukan koneksi dengan secret key
    await doc.useServiceAccountAuth({
      client_email: process.env.NEXT_PUBLIC_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });
    //2.load file Google Sheets
    await doc.loadInfo();
    //3.pilih worksheets 'Sheets 1' - index ke-0
    const sheet = doc.sheetsByIndex[0];
    //4.tambah row baru dengan data
    await doc.addRow(data);
  } catch (err) {
    console.error("ERROR :", err);
  }
};
