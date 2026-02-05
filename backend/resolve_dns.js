const dns = require('dns');
const fs = require('fs');
dns.setServers(['8.8.8.8']);
dns.resolveTxt('cluster0.lvnxfa7.mongodb.net', (err, records) => {
    if (err) {
        fs.writeFileSync('txt_full.txt', JSON.stringify(err));
        return;
    }
    fs.writeFileSync('txt_full.txt', JSON.stringify(records, null, 2));
});
