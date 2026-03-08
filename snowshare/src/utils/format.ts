export const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

export const truncateString = (str: string, length: number): string => {
    return str.length > length ? str.substring(0, length) + '...' : str;
};