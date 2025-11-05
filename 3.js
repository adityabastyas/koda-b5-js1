//Membuat progam untuk menampilkan string "Koda Tech Academy" ketika mengakses objek obj.str[1][2][3].koda[0].tech["academy"]

const obj = {
  str: [
    's',
    [
      's',
      's',
      [
        'd',
        'd',
        'd',
        { koda: [{ tech: { academy: 'Koda Tech Academy' } }, '1'] },
      ],
    ],
  ],
};

console.log(obj.str[1][2][3].koda[0].tech['academy']);
