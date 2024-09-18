export default function getCharactersFeatures({ special }) {
  const result = special.map((item) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = item;
    return {
      id,
      name,
      icon,
      description,
    };
  });
  return result;
}

// export default function getCharactersFeatures({ special }) {
//   const result = special.map((item) => {
//     const newItem = { ...item };
//     if (!('description' in item)) {
//       newItem.description = 'Описание недоступно';
//     }
//     return newItem;
//   });
//   return result;
// }

// export default function getCharactersFeatures({ special }) {
//   const result = special.map((item) => {
//     if (!('description' in item)) {
//       return { ...item, description: 'Описание недоступно' };
//     }
//     return item;
//   });
//   return result;
// }
