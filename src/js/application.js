import '../sass/application.scss';
import $ from './jquery-2.1.0.min';

const names = ['Tiger', 'Samuel', 'Leeloo',
    'Bella', 'Mo', 'Sly',
    'Beezy', 'Maple', 'Rodney',
    'Yonce', 'Reginald', 'Winifred'];

const ages = ['9 Weeks', '12 Weeks', '3 Months',
    '8 Weeks', '1 Year', '15 Weeks',
    '4 Months', '2 Months', '14 Weeks',
    '6 Months', '10 Weeks', '8 Months'];

$('.kittens').find('li').each( function(i, el) {
  const img = $(el).find('img');
  const name = $(el).find('.name');
  const age = $(el).find('.age');

  const w = 250;
  const h = 250;

  img.attr('src', 'http://placekitten.com/'+w+'/'+h+'?image='+i);
  name.text(names[i]);
  age.text(ages[i]);
});
