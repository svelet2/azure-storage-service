async function getTheImage(accountName, accessKey, imagePath){
    const blobService = createBlobService(accountName, accessKey);

    const containerName = "philosphers";
    const containerClient = blobService.getContainerClient(containerName);
    const blobClient = containerClient.getBlobClient(imagePath);

    const properties = await blobClient.getProperties();
    const response = await blobClient.download();
    return [reponse, properties];
}

module.exports = { getTheImage }