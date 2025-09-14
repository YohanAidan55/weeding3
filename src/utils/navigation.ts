export const openWaze = (address: string | number | boolean) => {
    const encodedAddress = encodeURIComponent(address);
    const wazeUrl = `https://waze.com/ul?q=${encodedAddress}&navigate=yes`;
    window.open(wazeUrl, "_blank");
};
