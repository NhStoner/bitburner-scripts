/** @param {import(".").NS } ns */
export async function main(ns) {
    var serverList = [];
    var scannerQueue = ["home"];

    while (scannerQueue.length > 0) {
        var target = scannerQueue.shift();
        var scan = ns.scan(target);
        for (const server of scan) {
            if (server !== "home" && server !== "darkweb" && !serverList.includes(server))   {
                scannerQueue.push(server);
                serverList.push(server);
            }
        }
        
    }
    ns.tprint(serverList);
}