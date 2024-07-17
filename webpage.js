var red = {
    x: ['Blue (470)', 'Cyan (525)', 'Green (560)', 'Yellow (585)', 'Orange (600)', 'Red (645)', 'Deep Red (700)', 'IR1 (735)', 'IR2 (810)', 'IR3 (880)', 'IR4 (940)'],
    y: [9.577922078, 8.873239437, 12.67409471, 31.18741059, 47.73722628, 74.13533835, 87.82343988, 88.0910683, 97.6340694, 103.2258065, 105.8479532],
    name: 'Red Folder',
    marker: {color: 'rgb(255, 0, 0)'},
    type: 'bar'
  }
var green = {
    x: ['Blue (470)', 'Cyan (525)', 'Green (560)', 'Yellow (585)', 'Orange (600)', 'Red (645)', 'Deep Red (700)', 'IR1 (735)', 'IR2 (810)', 'IR3 (880)', 'IR4 (940)'],
    y: [22.88961039, 27.18309859, 21.7270195, 12.1602289, 10.80291971, 16.9924812, 27.09284627, 22.41681261, 57.0977918, 85.64516129, 94.73684211,],
    name: 'Green Folder',
    marker: {color: 'rgb(39, 209, 72)'},
    type: 'bar'
  }
var data = [red, green];
var form = {
  barmode: 'group',
  title: 'Reflectance % Based On Base Wavelength',
  xaxis: {
    title: 'Base Wavelength'
  },
  yaxis: {
    title: 'Reflectance Percentage'
  }
};
