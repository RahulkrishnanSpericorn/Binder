export const formatNumber = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const formatmoney = x => {
    return "$ " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
