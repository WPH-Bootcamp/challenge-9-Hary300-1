export const formatDate = (date: string) => {
  return new Date(date).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

// export const formatDate = (date: string) => {
//   return new Intl.DateTimeFormat('en-GB', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     hour12: false,
//   }).format(new Date(date));
// };
