import fs from "fs";
import { parse } from "csv-parse/sync";
import { v4 as uuidv4 } from "uuid";
// import QRCode from "qrcode";

// 1️⃣ Read the CSV file
const csvData = fs.readFileSync("./guests.csv", "utf-8");
const guests = parse(csvData, { columns: true });

// 2️⃣ Generate UUIDs + QR Codes
const output = [];

(async () => {
  for (const guest of guests) {
    const id = uuidv4();
    const inviteUrl = `https://yourdomain.com/invite?id=${id}`;
    // const qrCode = await QRCode.toDataURL(inviteUrl);

    output.push({ ...guest, id, inviteUrl, qrCode });
  }

  // 3️⃣ Save output to JSON
  fs.writeFileSync("./guestData.json", JSON.stringify(output, null, 2));
  console.log("✅ guestData.json generated successfully!");
})();
