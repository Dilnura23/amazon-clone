import dayjs from 'https://unpkg.com/dayjs@1.11.10/dayjs.min.js';

export function dayjsPractice (){
  const today = dayjs();
  console.log(today.format('MMMM'));
};
